import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  constructor(private db: AuthenticationService){}

  loggedUser: { firstName: string; lastName: string; email: string } | null = this.db.getUserInfo();
}
