import { CategoryService } from '../../services/category.service';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  createCategoryForm = new FormGroup({
    name: new FormControl("", Validators.required),
  });
  constructor(private categoryService: CategoryService, private router: Router) {}
  onSubmit() {
    this.categoryService
      .createCategory(this.createCategoryForm.value)
      .subscribe((cat) => this.router.navigate(["/admin/categories"]));
  }

  ngOnInit(): void {
  }

}
