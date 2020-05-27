import { Component, OnInit } from '@angular/core';

import { Book } from './../../../core/models/book.model';
import { BookService } from './../../../core/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.container.html',
  styleUrls: ['./books.component.scss']
})
// tslint:disable-next-line: component-class-suffix
export class BooksContainer implements OnInit {

  books: Book[];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.bookService.getAllBooks()
      .subscribe(books => {
        this.books = books;
      });
  }

}
