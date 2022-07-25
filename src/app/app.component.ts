import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = "Expense-Manager";

  isUserLoggedIn = false;

  constructor(private authService : AuthService) {}

  ngOnInit() : void {

    var storeData = localStorage.getItem("isUserLoggedIn");
    console.log("Stored Data : " + storeData);

    if(storeData != null && storeData == 'true') {

      this.isUserLoggedIn = true;

    }

    else {

      this.isUserLoggedIn = false;

    }

  }
  
}
