import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    private books: Book[] = [
        {
            "id": "1",
            "title": "1984",
            "author": "George Orwell",
            "genre": "Ficção Científica",
            "year": 1948,
            "synopsis": "Num regime totalitário controlado pelo Partido, Winston Smith tenta preservar a sua individualidade enquanto vive sob vigilância constante do Big Brother.",
            "opinion": "Uma obra intensa e inquietante que continua extremamente atual pela forma como aborda vigilância, manipulação da verdade e controlo social.",
            "rating": 5,
            "quotes": [
                "Big Brother está a observar-te.",
                "A liberdade é a liberdade de dizer que dois mais dois são quatro."
            ],
            "cover": "assets/covers/bookcover-1984.jpg",
            "favorite": true,
            "read": true
        },
        {
            "id": "2",
            "title": "Admirável Mundo Novo",
            "author": "Aldous Huxley",
            "genre": "Ficção Científica",
            "year": 1932,
            "synopsis": "Numa sociedade futurista aparentemente perfeita, os seres humanos são condicionados desde o nascimento para aceitar o seu papel e evitar qualquer conflito emocional.",
            "opinion": "Um livro provocador que questiona felicidade artificial, consumismo e a perda de liberdade em troca de conforto.",
            "rating": 5,
            "quotes": [
                "Cada um pertence a todos os outros.",
                "A felicidade real custa sempre um pouco de dor."
            ],
            "cover": "assets/covers/bookcover-amn.jpg",
            "favorite": false,
            "read": true
        },
        {
            "id": "3",
            "title": "O Mundo de Sofia",
            "author": "Jostein Gaarder",
            "genre": "Filosofia",
            "year": 1991,
            "synopsis": "Sofia, uma jovem norueguesa, começa a receber cartas misteriosas que a introduzem à história da filosofia desde os pré-socráticos até aos tempos modernos.",
            "opinion": "Uma excelente introdução à filosofia, acessível e criativa, capaz de despertar curiosidade mesmo em quem nunca estudou o tema.",
            "rating": 5,
            "quotes": [
                "Quem és tu?",
                "A capacidade de nos surpreendermos é essencial para filosofar."
            ],
            "cover": "assets/covers/bookcover-omds.jpg",
            "favorite": false,
            "read": true
        },
        {
            "id": "4",
            "title": "Os Irmãos Karamazov",
            "author": "Fyodor Dostoevsky",
            "genre": "Romance Filosófico",
            "year": 1880,
            "synopsis": "A história acompanha os conflitos entre os irmãos Karamazov, explorando fé, moralidade, culpa e livre-arbítrio após o assassinato do pai.",
            "opinion": "Uma obra profunda e emocionalmente exigente, com diálogos filosóficos e personagens extremamente humanas.",
            "rating": 5,
            "quotes": [
                "Cada um de nós é culpado perante todos.",
                "O mistério da existência humana não está apenas em viver, mas em encontrar um motivo para viver."
            ],
            "cover": "assets/covers/bookcover-oik.jpg",
            "favorite": true,
            "read": true
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
