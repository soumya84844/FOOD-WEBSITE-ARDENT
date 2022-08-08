import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { DebugComponent } from './debug/debug.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent,
    DebugComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
