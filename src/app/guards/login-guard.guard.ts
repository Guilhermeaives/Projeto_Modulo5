import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FireAuthService } from '../services/fire-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
 
  constructor(
    private as:  FireAuthService,
    private routerControl: Router
  ){

  }
  canActivate(): Promise<boolean>{
    return new Promise( results => {
      this.as.getAuth().onAuthStateChanged(user => {
        if(user) this.routerControl.navigate(['tabs']);
        results(!user ? true: false)
      })
    })
   }
  
}
