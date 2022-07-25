import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseGuard } from './expense.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

  { path : 'expenses', component : ExpenseEntryListComponent, canActivate : [ExpenseGuard] },
  { path : 'expenses/detail/:id', component : ExpenseEntryComponent, canActivate : [ExpenseGuard] },
  { path : '', redirectTo : 'home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'logout', component : LogoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
