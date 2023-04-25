import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpHeaders} from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
  baseUrl = 'http://localhost:8010';
  constructor(private http: HttpClient, private authService:AuthService) { }
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
  onFileUpload(event: any) {

   const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('url', 'http://localhost:8010/api/file');
  
   formData.append("username",this.username);
 
    this.http.post(this.baseUrl + '/api/file', 
    formData).subscribe(
      response => console.log('Upload successful'),
      error => console.error(error)
    ); /*
    let url = this.baseUrl + '/api/file';
    fetch (url, {
      method : 'POST',
      body : formData
    }).then(response => {
      console.log(response);
}).catch(error => {
      console.log(error);
    }
); */
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

}
}