import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:3000/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getJob(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  applyForJob(jobApplication: any): Observable<any> {
    return this.http.post(this.apiUrl, jobApplication);
  }
}
