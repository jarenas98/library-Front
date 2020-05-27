import { AdminModule } from './admin.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './../admin/components/nav/nav.component';
import { BooksContainer } from './containers/books/books.container';
import { LoansListComponent } from './containers/loans-list/loans-list.component';
import { LoancComponent } from './containers/loanc/loanc.component';
import { LoanDetailComponent } from './components/loan-detail/loan-detail.component';



const routes: Routes = [{
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'books',
        component: BooksContainer
      },
      {
        path: 'loans',
        component: LoansListComponent

      },
      {
        path: 'loan',
        component: LoancComponent

      },
      {
        path: 'loan/:id',
        component: LoanDetailComponent
      }
    ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
