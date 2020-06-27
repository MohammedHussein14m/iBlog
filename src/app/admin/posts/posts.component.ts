import { PostsService } from "../../services/posts.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private postsService: PostsService ,private route: ActivatedRoute) {
    this.postsService.getPosts().subscribe((post) => {
      this.posts = post;
    });

  }

  deletePost(id){
    console.log("delete");
    this.postsService.deletePost(id).subscribe(data => {
      this.posts = this.posts.filter(p => {
        return p.id !== id
      })
    })

  }

  ngOnInit(): void {}
}

