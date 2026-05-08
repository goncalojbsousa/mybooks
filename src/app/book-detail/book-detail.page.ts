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
  ratingOptions = [1, 2, 3, 4, 5];

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
    // Get book id from route and load data
    const id = this.route.snapshot.paramMap.get('id');
    this.book = id ? this.booksService.getById(id) : undefined;
  }

  toggleFavorite(book: Book) {
    // Toggle favorite status
    this.booksService.toggleFavorite(book.id);
  }

  toggleRead(book: Book) {
    // Toggle read status
    this.booksService.toggleRead(book.id);
  }

  updateOpinion(book: Book, opinion: string) {
    // Update personal opinion
    this.booksService.updateOpinion(book.id, opinion);
  }

  setRating(book: Book, rating: number) {
    // Update personal rating
    this.booksService.updateRating(book.id, rating);
  }
}
