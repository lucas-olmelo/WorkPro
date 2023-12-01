import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../model/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './userPost.component.html',
  styleUrls: ['./userPost.component.css']
})
export class UserPostComponent {

  constructor(private db: PostService, private router: Router) {}

  post: Post = new Post();
  submitted = false;

  newPost(): void {
    this.submitted = false;
    this.post = new Post();
  }

  save() {
    this.db.createPost(this.post).subscribe(data => {
      console.log(data)
      this.post = new Post();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();   
    this.reloadPage();
  }

  reloadPage(){
    window.location.reload()
  }
}
