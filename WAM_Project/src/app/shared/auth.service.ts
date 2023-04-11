import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;

  constructor(private router: Router) { }
  /* 
    Check if the user is logged in
  */
  isLoggedIn() {
    const token = localStorage.getItem('jwt_token');
      if (token) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
getToken(){ 
  return localStorage.getItem('jwt_token');
}
    getUserName() {
      if (this.isLoggedIn()) {
        const token = localStorage.getItem('jwt_token');
        if(token) {
          console.log("True TOKEN");
          console.log(token);
        
          const payload = jwtDecode(token);
          console.log(payload);
         // return payload.username;
      }
    }
    }
    /* 
      Log the user out
    */
    logout() {
      localStorage.removeItem('jwt_token');
      this.router.navigate(['/login']);
      this.loggedIn=false;

    }

  // renvoie une promesse qui est résolue si l'utilisateur est loggué

}