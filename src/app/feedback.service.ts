import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private readonly apiUrl = 'http://localhost:8080/WasteWise';

  constructor(private http: HttpClient) { }

  createFeedback(feedback: Feedback) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.apiUrl}/feedback`, feedback, { headers });
  }
  
  
  

  getFeedback(id: number): Observable<Feedback> {
    return this.http.get<Feedback>(`${this.apiUrl}/feedbacks/${id}`);
  }

}
