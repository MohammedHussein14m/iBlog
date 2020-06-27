import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filteredPosts;
  posts: any;
  constructor(private data: PostsService) {
    this.data.getPosts().subscribe((post) => {this.filteredPosts = this.posts = post;
    console.log(this.posts);

    });
  }
  filter(query : String){
    this.filteredPosts = (query) ?
    this.posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.posts;
    console.log(this.filteredPosts);
    console.log(this.posts);
  }

  ngOnInit(): void {
  }

}
