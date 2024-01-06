import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url!: string
  constructor(private http: HttpClient) {
    this.url = environment.base + ':' + environment.port
  }
  login(data: any) {
    return this.http.post(`${this.url}/login`, data);
  }
}
