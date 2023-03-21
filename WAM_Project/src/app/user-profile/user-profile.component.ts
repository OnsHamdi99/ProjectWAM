import { HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/user').subscribe((res: any) => {
      console.log(res);
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.http.post('/api/upload', formData).subscribe(
      response => console.log('Upload successful'),
      error => console.error(error)
    );
}

}