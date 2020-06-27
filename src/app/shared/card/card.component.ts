import { PostsService } from '../../services/posts.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  posts: any;
  constructor(private data: PostsService) {
    this.data.getPosts().subscribe((post) => {this.posts = post;
    console.log(this.posts);

    });
  }

  ngOnInit(): void {}
}
