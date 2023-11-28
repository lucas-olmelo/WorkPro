import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/components/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private db: PostService) {}

  posts!: Observable<Post[]>;

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.posts = this.db.getPostsList();
  }
}
