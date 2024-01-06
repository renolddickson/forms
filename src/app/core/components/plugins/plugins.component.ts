import { Component } from '@angular/core';
import { CommonService } from 'src/app/common/services/common.service';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent {
  countries:any;
  constructor(private common:CommonService){}
  getCountries(){
    if(!this.countries)
   this.common.getAllCountries().then((res)=>{
    this.countries= res
    })
    return this.countries
  }
}
