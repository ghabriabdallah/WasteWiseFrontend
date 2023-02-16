import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:8080/WasteWise/auth';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, user);
  }

  authenticate(credentials: any): Observable<any> {
    return this.http.post(`${this.API_URL}/authenticate`, credentials);
  }
  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.API_URL}/authenticate`, credentials);
  }
  
}
