import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/models/IComment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  Comentarios:IComment[] = [];
  myid:number = 0;

  constructor(private service:CommentService,private rutparam:ActivatedRoute,) { }

  ngOnInit(): void {

    this.myid = this.rutparam.snapshot.params["id"];
    if(this.myid!= 0 && this.myid!=undefined){
      this.showCommentClient(this.myid);

    }else{
      this.getComment();
    }
  }


  getComment(){
    this.service.All().subscribe(
      data =>{
        console.log(data);
        this.Comentarios = data;
      },
      error =>{ console.log(error); }
    );
  }

  showCommentClient(idcontact:number){
    this.service.Comments(idcontact).subscribe(
      data=>{
        console.log(data);
        this.Comentarios = data;
      },
      error=>{
        console.log(error);
      }
    );

  }

}
