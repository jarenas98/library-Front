import { Component, Input, OnInit } from '@angular/core';
import { Book } from './../../../core/models/book.model';

@Component({
  selector: 'app-loanbook',
  templateUrl: './loanbook.component.html',
  styleUrls: ['./loanbook.component.scss']
})
export class LoanbookComponent implements OnInit {

  @Input() book: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
