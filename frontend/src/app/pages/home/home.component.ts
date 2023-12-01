import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
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
    console.log(this.posts);
  }

  reloadData() {
    this.posts = this.db.getPostsList();
    this.posts = this.posts.pipe(
      tap(results => {
        results.sort((a: Post, b: Post) => {
          let da: any = new Date(a.timestamp),
              db: any = new Date(b.timestamp);
          return db - da;
        })
      })
    )
  }
}
