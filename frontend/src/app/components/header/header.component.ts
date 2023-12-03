import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private db: AuthenticationService){}

  ngOnInit(): void {

  }

  user: string = this.db.getUserInfo()?.firstName + " " + this.db.getUserInfo()?.lastName;

  logout(): void {
    this.db.logout();
    window.location.reload();
  }

  isAuthenticated: boolean = this.db.isAuthenticated();
}
