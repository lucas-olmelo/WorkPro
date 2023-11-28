import { Component, Input } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-community-post',
  templateUrl: './community-post.component.html',
  styleUrls: ['./community-post.component.css']
})
export class CommunityPostComponent {

  @Input() post: any;
}
