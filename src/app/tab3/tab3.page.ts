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
  favorites: Book[] = [];

  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit(): void {
    this.favorites = this.booksService.getFavorites();
  }

  ionViewWillEnter(): void {
    this.favorites = this.booksService.getFavorites();
  }

  openDetail(book: Book) {
    this.router.navigate(['/book-detail', book.id]);
  }

  toggleFavorite(book: Book, event?: Event) {
    event?.stopImmediatePropagation();
    this.booksService.toggleFavorite(book.id);
    this.favorites = this.booksService.getFavorites();
  }

}
