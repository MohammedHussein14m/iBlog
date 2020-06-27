import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }
  getTags() {
    return this.http.get("http://localhost:3000/tags");
  }
  createTags(tag){
    return this.http.post("http://localhost:3000/tags",tag)
  }
  getTag(id){
    return this.http.get(`http://localhost:3000/tags/${id}`)
  }
  editTag(tag){
    return this.http.put(`http://localhost:3000/tags/${tag.id}`, tag);
  }
  deleteTag(id) {
    return this.http.delete(`http://localhost:3000/tags/${id}`)
  }
}
