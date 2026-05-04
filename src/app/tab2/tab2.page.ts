import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  books: Book[] = [];
  genres: string[] = [];
  selectedGenre = 'all';
  selectedStatus: 'all' | 'read' | 'unread' = 'all';

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  ionViewWillEnter(): void {
    this.loadBooks();
  }

  get filteredBooks(): Book[] {
    let list = this.books;

    if (this.selectedStatus === 'read') {
      list = list.filter(b => b.read);
    }

    if (this.selectedStatus === 'unread') {
      list = list.filter(b => !b.read);
    }

    if (this.selectedGenre !== 'all') {
      list = list.filter(b => b.genre === this.selectedGenre);
    }

    return list;
  }

  openDetail(book: Book) {
    this.router.navigate(['/book-detail', book.id]);
  }

  toggleRead(book: Book, event?: Event) {
    event?.stopImmediatePropagation();
    this.booksService.toggleRead(book.id);
  }

  private loadBooks(): void {
    this.books = this.booksService.getAll();
    this.genres = Array.from(new Set(this.books.map(b => b.genre))).sort();
  }
}
