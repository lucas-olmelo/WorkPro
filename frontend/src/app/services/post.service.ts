import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/workproposts/posts';

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPost(post: Object): Observable<Object> {
    console.log(post);
    return this.http.post(`${this.baseUrl}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPostsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
