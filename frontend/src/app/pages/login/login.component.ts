import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/components/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private db: AuthenticationService, private router: Router){ }
  
  loginUser: {email: string, password: string} = {email:'', password:''};
  loggedUser: { firstName: string; lastName: string; email: string } | null = { firstName: '', lastName: '', email: '' }

  errorMessage: string | null = null;

  mostrarSenha = false;
  toggleMostrarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  login(){
    this.db.login(this.loginUser).subscribe(
      response => {
        console.log(response);
        this.loggedUser = this.db.getUserInfo();
      }, error => {
        console.log(error);
        this.errorMessage = 'Email ou senha incorretos. Tente novamente.';
      }
    );
  }

  user: User = new User();
  submitted = false;

  save() {
    this.db.register(this.user).subscribe(
      response => {
        console.log(response);
        this.inverteFlag();
      }, error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  cadastroFlag: boolean = false;

  inverteFlag() {
    this.cadastroFlag = !this.cadastroFlag;
  }
}
