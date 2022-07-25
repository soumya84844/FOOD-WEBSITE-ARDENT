import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      var url : string = state.url;

      return this.checkLogin(url);

  }

  constructor(private authService : AuthService, private router : Router) {}

  checkLogin(url : string) : any {

    console.log("URL : " + url);

    var val : any = localStorage.getItem('isUserLoggedIn');

    if(val != null && val == 'true') {

      if(url = '/login') {

        this.router.parseUrl('/expenses');

      }

      else {

        return true;

      }

    }

    else {

      return this.router.parseUrl('/login')

    }

  }
  
}
