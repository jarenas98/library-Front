import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Client } from './../models/client.model';

import { environment } from './../../../environments/environment';

// si alguna data requiere una transformacion
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private https: HttpClient
  ) { }

  getClientById(id: number) {
    return this.https.get<Client>(`${environment.url_api}/client/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }


  // para tratar los errores del servicio
  private handleError(error: HttpErrorResponse) {

    return throwError('ups algo salio mal');
  }
}
