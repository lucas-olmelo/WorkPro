import { Component } from '@angular/core';
import { User } from 'src/app/components/model/user';
import { UserService } from 'src/app/services/user.service'
// import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private db: UserService){ }

  user: User = new User();
  submitted = false;

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.db.createUser(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
    this.inverteFlag();
  }

  cadastroFlag: boolean = false;

  inverteFlag() {
    this.cadastroFlag = !this.cadastroFlag;
  }

  // showConfirmation() {
  //   // monta o css da mensagem para que fique flutuando na frente de todos elementos da página
  //   var cssMessage = "display: block; position: fixed; bottom: 5%; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999";
  //   var cssInner = "padding: 2%; font-size: 18px; margin: 0 auto; box-shadow: 1px 1px 5px black;";

  //   // monta o html da mensagem com Bootstrap
  //   var dialogo = "";
  //   dialogo += '<div id="message" style="'+cssMessage+'">';
  //   dialogo += '    <div class="alert alert-success alert-dismissable" style="'+cssInner+'">';
  //   dialogo += '    <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>';
  //   dialogo += `    O usuário foi criado com sucesso!`
  //   dialogo += '    </div>';
  //   dialogo += '</div>';

  //   // adiciona ao body a mensagem com o efeito de fade
  //   $("body").append(dialogo);
  //   $("#message").hide();
  //   $("#message").fadeIn(200);

  //   // contador de tempo para a mensagem sumir
  //   setTimeout(function() {
  //     $('#message').fadeOut(300, function(){
  //         $(this).remove();
  //     });
  //   }, 3000); // milliseconds
  // }
}
