import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/workpro';

  public postUsuario(id: number): Observable<any> {
    const date = new Date();
    const params = new HttpParams().set('id', id);  
    const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
    return this.http.post<any>(this.url, params, options);
  }

  // public postUsuario(code: any): Observable<any> {
  //   const params = new HttpParams()
  //   .set('code', code);  
  //   const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
  //   return this.http.post<any>(url, params, options);
  // }

  public getPosts(): Observable<any> {
    const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
    return this.http.post<any>(this.url, options);
  }
}
