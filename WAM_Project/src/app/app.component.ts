import { Component } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { LoginWithGithubService } from 'ngx-login-with-github';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor () {}
  title = 'WAM_Project';
  baseUrl = 'http://localhost:8010';
  user : any; 

  ngOnInit() {
  }

}

