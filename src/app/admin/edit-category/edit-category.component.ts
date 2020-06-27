import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.css"],
})
export class EditCategoryComponent implements OnInit {
  editCategoryForm = new FormGroup({
    name: new FormControl("", Validators.required),
    id : new FormControl('')
  });
  constructor(private categoryService : CategoryService  , private route : ActivatedRoute, private router: Router) {
    this.categoryService.getCategory(this.route.snapshot.params.id).subscribe((data : any) => {
      this.editCategoryForm.controls.name.setValue(data.name);
      this.editCategoryForm.controls.id.setValue(data.id);
    })
  }
  onSubmit(){
    this.categoryService
      .editCategory(this.editCategoryForm.value)
      .subscribe((p) => this.router.navigate(["/admin/categories"]));
  }
  ngOnInit(): void {}
}
