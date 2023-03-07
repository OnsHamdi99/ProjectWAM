import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

    public domain:string='http://localhost:8010/api/plugins';
    constructor(public http:HttpClient){};
    // constructor(public http:HttpClient) {  this.http.get(this.domain+api).subscribe(response)=>{ resolve(response);})}
      get(api:string){
            return new Promise(  (resolve,reject)=>{
            
              this.http.get(this.domain+api).subscribe( (response)=>{ resolve(response);})
              // this.http.get(this.domain+api).map(response=>response.json()).subscribe( response=>{ console.log(response);})
              });
      }
}
