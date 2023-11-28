import { Component } from '@angular/core';
import { User } from 'src/app/components/model/user';
import { UserService } from 'src/app/services/user.service'

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
