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

  onFileUpload(event: any) {
    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.http.post(this.baseUrl + '/api/file', 
    formData).subscribe(
      response => console.log('Upload successful'),
      error => console.error(error)
    );
}

}