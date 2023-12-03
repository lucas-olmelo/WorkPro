import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/components/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent {

  constructor(private db: UserService) {}

  users!: Observable<User[]>;

  ngOnInit() {
    this.reloadData();
    console.log(this.users);
  }

  reloadData() {
    this.users = this.db.getUsersList();
  }
}
