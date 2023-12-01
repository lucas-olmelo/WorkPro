import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/workprojobs/jobs';

  getJob(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createJob(job: Object): Observable<Object> {
    console.log(job);
    return this.http.post(`${this.baseUrl}`, job);
  }

  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getJobsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }
}
