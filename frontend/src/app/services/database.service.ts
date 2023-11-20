import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/angular';

  public postUsuario(code: any): Observable<any> {
    const params = new HttpParams().set('code', code);  
    const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
    return this.http.post<any>(this.url, params, options);
  }

  public getPosts(): Observable<any> {
    return this.http.get(this.url);
  }
}
