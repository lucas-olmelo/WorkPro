import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import * as $ from 'jquery';

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
    return this.http.post(`${this.baseUrl}`, job).pipe(
      tap(data => {
        console.log(data);
        this.showMessage('success', 'Vaga criada com sucesso!')
        window.location.reload;
      }), catchError(error => {
        console.error(error);
        this.showMessage('danger', 'Não foi possível criar a vaga. \nVerifique suas informações e tente novamente.')
        return throwError(error);
      })
    );;
  }

  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getJobsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
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
