import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
  baseUrl = 'http://localhost:8010';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  envoieForm() {

  }

  onFileUpload(event: any) {
   const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('url', 'http://localhost:8010/api/file');
    
    console.log(formData.get('file'));
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

}