import { Component, OnInit } from '@angular/core';


import { Book } from './../../../core/models/book.model';
import { BookService } from './../../../core/services/book.service';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent implements OnInit {

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
