import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders} from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
  baseUrl = 'http://localhost:8010';
  constructor(private http: HttpClient, private location: Location, private authService:AuthService) { }
  files=Array<string>();
  username: string = '';
  buttonClicked = false;
 

  ngOnInit(): void {
    this.authService.getUserName().subscribe(
      (    value: any) => {
         this.username = value;
         this.authService.setUsername(value);
       console.log(this.username) }   
    ); 
  }
  reloadPage(): void {
    window.location.reload();
  }

  onFileUpload(event: any) {

   const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('url', 'http://localhost:8010/api/file');
  
   formData.append("username",this.username);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', this.baseUrl + '/api/file', true);
  xhr.onload = () => {
    if (xhr.status === 204) {
      console.log('Upload successful');
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.send(formData);
  
  // Clear the file input value to allow selecting another file
  event.target.value = '';
  this.files.length = 0;  
  this.buttonClicked = false;
  
  }
  logout(){
    this.authService.logout();
  }
returnFiles(){
  return this.files;
}
getFiles(){
  this.buttonClicked = true;
 // this.authService.setUsername(this.username);
    this.authService.getUserFiles().subscribe(
    
      (response: any) => {
        if (response.length > 0) {
        for (let i = 0; i < response.length; i++) {

          this.files.push(response[i]);

        }
      }
      }
    ); 
  }

  SharePlugin(file:string){
    console.log(file);
  this.authService.sharePlugin(file);
}

deletePlugin(file:string){
  this.authService.deletePlugin(file); 
  this.reloadPage();

}
updatePlugin(file:string){
}

deleteAccount(){
  console.log("delete account");
  this.authService.deleteAccount();
}
}