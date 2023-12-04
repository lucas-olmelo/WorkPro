import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NotificationService } from './notification.service';
import { catchError, of, tap, throwError } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private notificationService: NotificationService, private router: Router) { }

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
    return this.http.post(`${this.baseUrl}/login`, JSON.stringify(user), httpOptions).pipe(
      tap(response => {
        localStorage.setItem('access_token', JSON.parse(JSON.stringify(response)).token)
        console.info(JSON.parse(JSON.stringify(response)).token);
        this.notificationService.notifyAuthenticationChanged();
        this.router.navigate(['profile']);
      }),
      catchError(error => {
        console.error('Erro no login', error);
        this.showMessage('danger', 'Email ou senha incorretos!');
        return throwError(error);
      })
    )
  }

  logout(): void {
    // Remove o token do localStorage
    localStorage.removeItem('access_token');
    this.notificationService.notifyAuthenticationChanged();
    this.router.navigate(['login']);
  }

  register(user: object){
    const httpOptions = {
      headers: new HttpHeaders({
                   'Content-Type': 'application/json',
                   'Access-Control-Allow-Origin': '*',
                   'Access-Control-Allow-Credentials': 'true'
      })
    };
  
    return this.http.post(`${this.baseUrl}/register`, JSON.stringify(user), httpOptions).pipe(
      tap(data => {
        console.log(data);
        this.showMessage('success', 'Usuário criado com sucesso!')
      }), catchError(error => {
        console.error(error);
        this.showMessage('danger', 'Não foi possível criar o seu usuário. \nVerifique suas informações e tente novamente.')
        return throwError(error);
      })
    );
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

  checkAuthentication(): boolean {
    const token = localStorage.getItem('access_token');
    // Verifica se há um token e se não está expirado
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  showMessage(type: string, message: string) {

    // monta o css da mensagem para que fique flutuando na frente de todos elementos da página
    var cssMessage = "display: block; position: fixed; bottom: 5%; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999";
    var cssInner = "padding: 2%; font-size: 18px; margin: 0 auto; box-shadow: 1px 1px 5px black;";

    // monta o html da mensagem com Bootstrap
    var dialogo = "";
    dialogo += '<div id="message" style="'+cssMessage+'">';
    dialogo += `<div class="alert alert-${type} alert-dismissable" style="+${cssInner}+">`;
    dialogo += '    <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>';
    dialogo += `    ${message}`
    dialogo += '    </div>';
    dialogo += '</div>';

    // adiciona ao body a mensagem com o efeito de fade
    $("body").append(dialogo);
    $("#message").hide();
    $("#message").fadeIn(200);

    // contador de tempo para a mensagem sumir
    setTimeout(function() {
      $('#message').fadeOut(300, function(){
          $(this).remove();
      });
    }, 3000); // milliseconds
  }
}
