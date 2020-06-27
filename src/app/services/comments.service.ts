import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  getComments() {
    return this.http.get("http://localhost:3000/comments");
  }
  addComment(comment){
    return this.http.post("http://localhost:3000/comments",comment)
  }
  deleteComment(id) {
    return this.http.delete(`http://localhost:3000/comments/${id}`)
  }
}
