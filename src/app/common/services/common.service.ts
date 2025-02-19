import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  plugin_view: any
  constructor(private api:ApiService) {
    this.plugin_view = this.getView('plugin')
  }
  changeView(type: string, view: string) {
    localStorage.setItem(type, view);
    this.plugin_view = view
  }
  getView(value:string){
    return localStorage.getItem(value)
  }
  async getAllCountries(): Promise<any> {
    const storedCountries = localStorage.getItem('countries');

    if (storedCountries) {
      return JSON.parse(storedCountries);
    } else {
      try {
        const allCountries = await this.api.getMethod(environment.country_api).toPromise();
        localStorage.setItem('countries', JSON.stringify(allCountries));

        return allCountries;
      } catch (error) {
        console.error('Error fetching countries:', error);
        return null;
      }
    }
  }
}
