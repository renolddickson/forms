import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }
  async getAllCountries(): Promise<any> {
    const storedCountries = localStorage.getItem('countries');

    if (storedCountries) {
      return JSON.parse(storedCountries);
    } else {
      try {
        const allCountries = await this.getMethod(environment.country_api).toPromise();

        localStorage.setItem('countries', JSON.stringify(allCountries));

        return allCountries;
      } catch (error) {
        console.error('Error fetching countries:', error);
        return null;
      }
    }
  }

  private getMethod(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl);
  }
}
