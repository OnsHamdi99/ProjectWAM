import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;
  username:string = '';
  constructor(private router: Router, private http: HttpClient) { 
    
  }
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
url = 'http://localhost:8010/api';

    getUserName():Observable<any> {
      const token = this.getToken();
      const headers = new HttpHeaders().set('Authorization', `${token}`);
    
      return this.http.get<{ username: string }>(`${this.url}/auth/username`, { headers });
    }
   
    setUsername(username:string){
      this.username=username;
      return this.username;
    }

    /* 
      Log the user out
    */
    logout() {
      localStorage.removeItem('jwt_token');
      this.router.navigate(['/login']);
      this.loggedIn=false;

    }// renvoie une promesse qui est résolue si l'utilisateur est loggué

    
  getUserFiles() { 
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    console.log(this.username + " on getuserfiles function");
    const params = new HttpParams().set('username', this.username);
    const url = `${this.url}/workspace`;
    console.log(url);
    return this.http.get(url, { headers, params }); 

  } 
  sharePlugin(file:string){
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    const params = new HttpParams().set('file', file).set('username', this.username);
    console.log(file);
    console.log(this.username);
    this.http.get(`${this.url}/workspace/share`,{headers, params}).subscribe(
      response => console.log('Upload successful'),
      error => console.error(error)
    );
  }
}




 