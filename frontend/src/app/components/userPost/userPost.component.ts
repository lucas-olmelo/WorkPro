import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../model/post';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-post',
  templateUrl: './userPost.component.html',
  styleUrls: ['./userPost.component.css']
})
export class UserPostComponent {

  constructor(private db: PostService, private auth: AuthenticationService, private router: Router) {}

  user = this.auth.getUserInfo()?.firstName + " " + this.auth.getUserInfo()?.lastName
  post: Post = new Post(this.user);  
  submitted = false;

  save() {
    this.db.createPost(this.post).subscribe(data => {
      console.log(data);
      this.post = new Post(this.user);
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;

    if(this.auth.isAuthenticated() === false){
      this.router.navigate(['login']);
    } else {
      this.save();   
      this.reloadPage();
    }
  }

  reloadPage(){
    window.location.reload()
  }
}
