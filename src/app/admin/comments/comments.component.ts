import { CommentsService } from '../../services/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments;

  constructor(private commentsService : CommentsService) {
    this.commentsService.getComments().subscribe(comment => this.comments = comment)
   }
   deleteComment(id){
    console.log("delete");
    this.commentsService.deleteComment(id).subscribe(data => {
      this.comments = this.comments.filter(p => {
        return p.id !== id
      })
    })
  }
  ngOnInit(): void {
  }

}
