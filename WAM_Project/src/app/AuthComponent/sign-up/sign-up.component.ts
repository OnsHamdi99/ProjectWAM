import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-profile',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

    password : string = ""; 
    email : string="";
    username : string="";
    url =  "http://localhost:8010/api/auth";

    register(){
      const body = { email: this.email, name : this.username, password: this.password };
      this.http.post(this.url + '/register', body).subscribe(
        response => { 
          this.router.navigate(['/home']);
          this.snackBar.open("Welcome", "Cole", {duration: 5000});
     
        }, 
  
        (error) => {
       this.snackBar.open("Incorrect logins", "close", {duration: 5000}); } 
     )
    }
    
  
    
  
  }