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

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.books = this.booksService.getAll();
  }

  openDetail(book: Book) {
    this.router.navigate(['/book-detail', book.id]);
  }

  toggleRead(book: Book, event?: Event) {
    event?.stopImmediatePropagation();
    this.booksService.toggleRead(book.id);
  }
}
