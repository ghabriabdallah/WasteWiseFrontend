import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/WasteWise';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/Admin/AllUsers`);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/Profile/${email}`);
  }

  removeUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Admin/RemoveUser/${id}`, { responseType: 'text' });
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateUser/${id}`, user, { responseType: 'text' });
  }

  changeDuty(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/Admin/ChangeDuty/${id}`, null, { responseType: 'text' });
  }

  updatePhotoById(id: number, photo: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/Profile/UpdatePhoto/${id}`, { photo }, { responseType: 'text' });
  }

}
