import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CommonService {

    // public domain:string='http://localhost:8010/api/plugins';
    constructor(public http:HttpClient) {  }
      
    //   get(api:string){
    //         return new Promise(  (resolve,reject)=>{
            
    //           this.http.get(this.domain+api).subscribe( (response)=>{ resolve(response);})
    //           })
    //   }
}
