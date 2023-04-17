import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import jwtDecode from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;

  constructor(private router: Router, private http: HttpClient) { }
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
url = 'http://localhost:8010/api/auth';

    getUserName():Observable<string> {
      const token = this.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<{ username: string }>(`${this.url}/username`, { headers }).pipe(
        map(response => response.username)
      );
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