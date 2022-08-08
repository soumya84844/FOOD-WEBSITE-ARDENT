import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

  { path : 'expenses', component : ExpenseEntryListComponent },
  { path : 'expenses/detail/:id', component : ExpenseEntryComponent },
  { path : '', redirectTo : 'login', pathMatch : 'full' },
  { path : 'home', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'logout', component : LogoutComponent },
  { path : 'about', component : AboutComponent },
  { path : 'add', component : AddComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
