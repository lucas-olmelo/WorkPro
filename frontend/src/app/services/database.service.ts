import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/workpro';

  public postUsuario(text: string): Observable<any> {
    const date = new Date();
    const params = new HttpParams().set('text', text).set('date', String(date));  
    const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
    return this.http.post<any>(this.url, params, options);
  }

  public getPosts(): Observable<any> {
    return this.http.get(this.url);
  }
}
