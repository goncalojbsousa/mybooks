import { Component, OnInit } from '@angular/core';
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

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = this.booksService.getAll();
  }

  toggleRead(book: Book) {
    this.booksService.toggleRead(book.id);
  }
}
