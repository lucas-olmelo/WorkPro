import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/workprousers/users';

  getUser(id: number): Observable<any> {
    const httpOptions = {
       headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true'
       })
     };
    return this.http.get(`${this.baseUrl}/${id}`, httpOptions);
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

  getUserLogin(email: string | undefined): Observable<any> {
    return this.http.get(`${this.baseUrl}/${email}`);
  }
}
