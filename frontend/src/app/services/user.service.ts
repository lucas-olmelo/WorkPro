import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/workpro/users';

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    console.log(user);
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // url: string = 'http://localhost:8080/workpro';

//   public postUsuario(id: number): Observable<any> {
//     const date = new Date();
//     const params = new HttpParams().set('id', id);  
//     const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
//     return this.http.post<any>(this.url, params, options);
//   }

//   // public postUsuario(code: any): Observable<any> {
//   //   const params = new HttpParams()
//   //   .set('code', code);  
//   //   const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
//   //   return this.http.post<any>(url, params, options);
//   // }

//   public getPosts(): Observable<any> {
//     const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
//     return this.http.post<any>(this.url, options);
//   }
}
