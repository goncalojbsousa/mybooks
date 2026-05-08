import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  // Refresh list when returning from detail view
  ionViewWillEnter(): void {
    this.loadBooks();
  }

  get favorites(): Book[] {
    return this.books.filter(book => book.favorite);
  }

  openDetail(book: Book) {
    this.router.navigate(['/book-detail', book.id]);
  }

  toggleFavorite(book: Book, event?: Event) {
    event?.stopImmediatePropagation();
    this.booksService.toggleFavorite(book.id);
  }

  private loadBooks(): void {
    this.books = this.booksService.getAll();
  }

}
