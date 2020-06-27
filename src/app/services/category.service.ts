import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategories() {
    return this.http.get("http://localhost:3000/category");
  }
  createCategory(cat){
    return this.http.post("http://localhost:3000/category",cat)
  }
  editCategory(cat){
    return this.http.put(`http://localhost:3000/category/${cat.id}`,cat)
  }
  getCategory(id){
    return this.http.get(`http://localhost:3000/category/${id}`);
  }
  deleteCategory(id) {
    return this.http.delete(`http://localhost:3000/category/${id}`)
  }

}
