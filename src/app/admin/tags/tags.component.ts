import { TagsService } from "../../services/tags.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.css"],
})
export class TagsComponent implements OnInit {
  tags;
  constructor(private tagsService: TagsService) {
    this.tagsService.getTags().subscribe((tag) => {
      this.tags = tag;
      //console.log(this.tags);
    });
  }
  deleteTag(id){
    console.log("delete");
    this.tagsService.deleteTag(id).subscribe(data => {
      this.tags = this.tags.filter(p => {
        return p.id !== id
      })
    })
  }
  ngOnInit(): void {}
}
