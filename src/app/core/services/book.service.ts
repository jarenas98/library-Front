import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Book } from './../models/book.model';

import { environment } from './../../../environments/environment';

// si alguna data requiere una transformacion
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private https: HttpClient
  ) { }

  getAllBooks() {
    return this.https.get<Book[]>(`${environment.url_api}/books`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getBook(id: number) {
    return this.https.get<Book>(`${environment.url_api}/books/${id}`)
    .pipe(
      catchError(this.handleError)
    );

  }

  createLoan(iduser: number, idbook: number, loandd: string)  {
    return this.https.get<Book>(`${environment.url_api}/addLoan?idclient=${iduser}&idbook=${idbook}&loand=${loandd}`)
    .pipe(
      catchError(this.handleError)
    );

  }

  // para tratar los errores del servicio
  private handleError(error: HttpErrorResponse) {

    return throwError('ups algo salio mal');
  }

}
