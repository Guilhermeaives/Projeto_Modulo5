import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FireAuthService } from '../services/fire-auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoLoguinGuardGuard implements CanActivate {

  constructor(
    private as:  FireAuthService,
    private routerControl: Router
  ){

  }

  canActivate(): Promise<boolean>{
    return new Promise( results => {
      this.as.getAuth().onAuthStateChanged(user => {
        if(!user) this.routerControl.navigate(['']);
        results(user ? true: false)
      })
    })
   }
  
}
