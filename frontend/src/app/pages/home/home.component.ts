import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private db: DatabaseService) {}

  list: any;

  ngOnInit() {
    this.list = this.db.getPosts();
    console.log(this.list);
  }
}
