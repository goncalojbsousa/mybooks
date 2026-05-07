import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    private books: Book[] = [
        {
            id: '1',
            title: 'Titulo Exemplo',
            author: 'Autor Exemplo',
            genre: 'Genero Exemplo',
            year: 2020,
            synopsis: 'Uma breve sinopse do livro de exemplo.',
            opinion: 'Uma breve opinião do livro de exemplo.',
            rating: undefined,
            quotes: ['"Um excerto marcante do livro de exemplo."'],
            cover: 'assets/covers/cover1.jpg',
            favorite: true,
            read: true,
        },
        {
            id: '2',
            title: 'Titulo Exemplo 2',
            author: 'Autor Exemplo 2',
            genre: 'Genero Exemplo 2',
            year: 2018,
            synopsis: 'Uma breve sinopse do segundo livro de exemplo.',
            opinion: 'Uma breve opinião do segundo livro de exemplo.',
            rating: 5,
            quotes: [],
            cover: 'assets/covers/cover2.jpg',
            favorite: false,
            read: false,
        }
    ];

    constructor() { }

    getAll(): Book[] {
        return this.books;
    }

    getFavorites(): Book[] {
        return this.books.filter(b => b.favorite);
    }

    getById(id: string): Book | undefined {
        return this.books.find(b => b.id === id);
    }

    toggleFavorite(id: string): void {
        const b = this.books.find(x => x.id === id);
        if (b) { b.favorite = !b.favorite; }
    }

    updateOpinion(id: string, opinion: string): void {
        const b = this.books.find(x => x.id === id);
        if (b) { b.opinion = opinion; }
    }

    updateRating(id: string, rating: number): void {
        const b = this.books.find(x => x.id === id);
        if (b) { b.rating = rating; }
    }

    toggleRead(id: string): void {
        const b = this.books.find(x => x.id === id);
        if (b) { b.read = !b.read; }
    }
}
