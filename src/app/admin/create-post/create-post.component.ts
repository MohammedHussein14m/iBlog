import { PostsService } from "../../services/posts.service";
import { Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"],
})
export class CreatePostComponent implements OnInit {
  createPostForm = new FormGroup({
    title: new FormControl("", Validators.required),
    body: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
  });
  constructor(private postsService: PostsService, private router: Router) {}
  onSubmit(post) {
    this.postsService
      .createPost(post)
      .subscribe((p) => this.router.navigate(["/admin/posts"]));
  }
  ngOnInit(): void {}
}
