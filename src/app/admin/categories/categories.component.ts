import { CategoryService } from '../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories;

  constructor(private categoryService : CategoryService ) {
    this.categoryService.getCategories().subscribe(category => this.categories = category);
  }
  deleteCategry(id){
    //console.log("delete");
    this.categoryService.deleteCategory(id).subscribe(data => {
      this.categories = this.categories.filter(p => {
        return p.id !== id
      })
    })

  }
  ngOnInit(): void {
  }

}
