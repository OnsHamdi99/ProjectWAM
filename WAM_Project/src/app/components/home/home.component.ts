import { Component } from '@angular/core';

import { CommonService } from "../../shared/common.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(public common:CommonService){}

    public list:any[]=[];
    ngOnInit(){
            var api='plugins.json';
            
            this.common.get(api).then((response:any)=>{


            console.log(response);

            this.list=response.plugs;
            })
      }
}
