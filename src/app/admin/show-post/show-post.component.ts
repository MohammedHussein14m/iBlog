import { PostsService } from "./../../services/posts.service";
import { Post } from "./../../models/post";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: "app-show-post",
  templateUrl: "./show-post.component.html",
  styleUrls: ["./show-post.component.css"],
})
export class ShowPostComponent implements OnInit {
  post$: Observable<Post>;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params) => this.postService.getPost(params.get("id")))
    );
    this.post$.forEach(d => console.log(d))

  }

  ngOnInit(): void {}
}
