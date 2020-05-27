import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';


import { MaterialModule } from './../material/material.module';
import { LoansListComponent } from './containers/loans-list/loans-list.component';
import { BookComponent } from './components/book/book.component';
import { BooksContainer } from './containers/books/books.container';
import { LoanbookComponent } from './components/loanbook/loanbook.component';
import { LoanComponent } from './components/loan/loan.component';
import { LoancComponent } from './containers/loanc/loanc.component';
import { LoanDetailComponent } from './components/loan-detail/loan-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent, LoansListComponent, BookComponent, BooksContainer, LoanbookComponent, LoanComponent, LoancComponent, LoanDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
