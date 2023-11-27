import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-post',
  templateUrl: './userPost.component.html',
  styleUrls: ['./userPost.component.css']
})
export class UserPostComponent {

  constructor(private database: DatabaseService) {}

  textItem: string = '';
  clientResult: string = '';

  chamadaBackPost(){
    this.database.postUsuario(parseInt(this.textItem)).subscribe((resp : any)=>
    {  
      alert("Postagem feita - "+resp);
      this.clientResult = resp;
      console.log(resp);
    },
    (error : any)=>{
      alert("error: "+error);
    }   
    )   
  }

}
