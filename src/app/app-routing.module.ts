import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path : 'expenses', component : ExpenseEntryListComponent },
  { path : 'expenses/detail/:id', component : ExpenseEntryComponent },
  { path : '', redirectTo : 'expenses', pathMatch : 'full' },
  { path : 'home', component : HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
