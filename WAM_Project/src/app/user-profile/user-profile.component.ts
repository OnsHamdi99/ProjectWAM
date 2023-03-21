import { HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(private http: HttpClient) { }
  /*
  * This function is called when the component is initialized.
  */
  ngOnInit() {
    this.http.get('http://localhost:3000/api/').subscribe((res: any) => {
      console.log(res);
    });
  }

  onFileUpload(event: any) {
    const file: File = event.target.files[0]; 
    const formData = new FormData(); // Create a form data object to send to the server 
    formData.append('zipFile', file); // Append the file to the form data object
    this.http.post('/api/upload', formData).subscribe( // Send the form data to the server
      response => console.log('Upload successful'),  // If the upload is successful, log a message to the console
      error => console.error(error) // If the upload fails, log the error to the console
    );
}

}