import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from './login-data';
import { AuthResponse } from './auth-response';
import { User
 } from './User/user';
 import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/WasteWise/auth/';
  constructor(private http: HttpClient) { }

  register(registerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}register`, registerData);
  }

    addDriver(registerData: any): Observable<any> {
      return this.http.post(`${this.baseUrl}addDriver`, registerData);
    }

  login(loginData: LoginData): Observable<AuthResponse> {
    const authRequest = {
      email: loginData.username,
      password: loginData.password
    };
    const headers = new HttpHeaders(loginData ? {
      'Content-Type': 'application/json'
    } : {});

    return this.http.post<AuthResponse>(
      `${this.baseUrl}authenticate`, 
      authRequest, 
      {headers: headers}
    );
    
  }
  checkEmailExists(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/auth/checkEmailExists?email=${email}`);
  }
  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
  
   getUserRole(): string | null {
  const token = localStorage.getItem('token');
  if (token) {
    const payload: any = jwt_decode(token);
    return payload.role;
  } else {
    return null;
  } 
}
  
getUsername(): string | null {
  const token = localStorage.getItem('token');
  if (token) {
    const payload: any = jwt_decode(token);
    return payload.sub;
  } else {
    return null;
  }
}


  
  
}