import { Client } from './../../../core/models/client.model';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';
import { Observable } from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BookService } from './../../../core/services/book.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

import { ClienteService } from './../../../core/services/cliente.service';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.scss']
})
export class LoanDetailComponent implements OnInit {

  book$: Observable<Book>;
  form: FormGroup;
  bookId: number;
  client: Client;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activeroute: ActivatedRoute,
    private bookService: BookService,
    private clienteService: ClienteService
  ) {
    this.buildForm();

  }

  ngOnInit(): void {
    // el producto es observable para que se escuchen los cambios
    this.activeroute.params
      .pipe(
        switchMap((params: Params) => {
          return this.bookId = params.id;
        })
      );


  }

  private buildForm() {
    this.form = this.formBuilder.group({
      clientId: [, [Validators.required]]
    });
  }

  saveLoan(data) {

    this.bookService.createLoan(data.clientId, this.bookId, '');

  }


}
