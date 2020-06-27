import { PostsService } from "./../../services/posts.service";
import { Post } from "./../../models/post";
import { Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"],
})
export class EditPostComponent implements OnInit {
  editPostForm = new FormGroup({
    title: new FormControl("", Validators.required),
    body: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    id: new FormControl(""),
    author: new FormControl(""),
  });

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private router: Router
  ) {
    this.postService
      .getOnePost(this.route.snapshot.params.id)
      .subscribe((data: any) => {
        //this.editPostForm.setValue(data);
        this.editPostForm.controls.title.setValue(data.title);
        this.editPostForm.controls.body.setValue(data.body);
        this.editPostForm.controls.category.setValue(data.category);
        this.editPostForm.controls.id.setValue(data.id);
        this.editPostForm.controls.author.setValue(data.author);
      });
  }
  onSubmit() {
    this.postService
      .editPost(this.editPostForm.value)
      .subscribe((p) => this.router.navigate(["/admin/posts"]));
  }
  ngOnInit(): void {}
}
