import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  baseUrl: string = "http://localhost:8080/auth"

  private jwtHelper: JwtHelperService = new JwtHelperService();

  login(user: any){
    const httpOptions = {
      headers: new HttpHeaders({
                   'Content-Type': 'application/json',
                   'Access-Control-Allow-Origin': '*',
                   'Access-Control-Allow-Credentials': 'true'
      })
    };
    return this.http.post(`${this.baseUrl}/login`, JSON.stringify(user), httpOptions).subscribe(data => {
      localStorage.setItem('access_token', JSON.parse(JSON.stringify(data)).token)
      console.info(JSON.parse(JSON.stringify(data)).token);
      this.router.navigate(['profile']);
      // window.location.reload();
    });
  }

  logout(): void {
    // Remove o token do localStorage
    localStorage.removeItem('access_token');
  }

  register(user: object){
  }

  getUserInfo(): { firstName: string; lastName: string; email: string } | null {
    const token = localStorage.getItem('access_token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken);

      return {
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        email: decodedToken.email,
      };
    }

    return null;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    // Verifica se há um token e se não está expirado
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }
}
