import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}
  
  canActivate(): boolean {
    //console.log(sessionStorage.getItem("Result"));
    if (sessionStorage.getItem("Result") === "true") {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false; /* This is unnecessary as redirecting will 
      happen before this line, however, it is necessary for this
      function as a boolean value needs to be returned */
    }
  }
}
