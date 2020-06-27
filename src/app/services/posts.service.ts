import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'
import { Post } from '../models/post';


@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get("http://localhost:3000/posts");
  }
  createPost(post){
    return this.http.post("http://localhost:3000/posts", post);
  }
  editPost(post){
    return this.http.put(`http://localhost:3000/posts/${post.id}`, post);
  }
  getPost(id) {
    return this.getPosts().pipe(
      map((posts : Post[]) => posts.find(post => post.id === +id))
    );
  }
  getOnePost(id) {
    return this.http.get(`http://localhost:3000/posts/${id}`);
  }
  deletePost(id) {
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
}
