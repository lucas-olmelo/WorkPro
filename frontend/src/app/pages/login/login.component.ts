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

  login(){
    this.db.login(this.loginUser);
    this.loggedUser = this.db.getUserInfo();
  }

  user: User = new User();
  submitted = false;

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    // this.db.createUser(this.user).subscribe(data => {
    //   console.log(data)
    //   this.user = new User();
    // },
    // error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.showConfirmation();
    this.inverteFlag();
  }

  cadastroFlag: boolean = false;

  inverteFlag() {
    this.cadastroFlag = !this.cadastroFlag;
  }

  showConfirmation() {
    alert("O usuário foi criado com sucesso!")
  }
}
