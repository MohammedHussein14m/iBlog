import { CommentsService } from "../../services/comments.service";
import { TagsService } from "../../services/tags.service";
import { Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-tag",
  templateUrl: "./create-tag.component.html",
  styleUrls: ["./create-tag.component.css"],
})
export class CreateTagComponent implements OnInit {
  crateTagForm = new FormGroup({
    name: new FormControl("", Validators.required),
  });
  constructor(
    private tagsService: TagsService,
    private router: Router,
    private commentService: CommentsService
  ) {}
  onSubmit() {
    this.tagsService
      .createTags(this.crateTagForm.value)
      .subscribe((tag) => this.router.navigate(["/admin/tags"]));
  }
  //this.commentService
  //.addComment(this.crateTagForm.value)
  //.subscribe((comment) => console.log("comment is :", comment));

  ngOnInit(): void {}
}
