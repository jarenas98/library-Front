import { Component, OnInit } from '@angular/core';

import { Book } from './../../../core/models/book.model';
import { BookService } from './../../../core/services/book.service';

@Component({
  selector: 'app-loanc',
  templateUrl: './loanc.component.html',
  styleUrls: ['./loanc.component.scss']
})
export class LoancComponent implements OnInit {

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
