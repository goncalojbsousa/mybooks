import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
  standalone: false,
})
export class BookDetailPage implements OnInit {
  book?: Book;

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.book = id ? this.booksService.getById(id) : undefined;
  }

  toggleFavorite(book: Book) {
    this.booksService.toggleFavorite(book.id);
  }

  toggleRead(book: Book) {
    this.booksService.toggleRead(book.id);
  }

  updateOpinion(book: Book, opinion: string) {
    this.booksService.updateOpinion(book.id, opinion);
  }
}
