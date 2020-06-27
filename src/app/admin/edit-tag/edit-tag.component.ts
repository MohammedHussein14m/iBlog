import { TagsService } from './../../services/tags.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {
  editTagForm = new FormGroup({
    name: new FormControl("", Validators.required),
    id : new FormControl('')
  });
  constructor(private tagService : TagsService , private route : ActivatedRoute, private router: Router) {
    this.tagService.getTag(this.route.snapshot.params.id).subscribe((data : any) => {
      this.editTagForm.controls.name.setValue(data.name);
      this.editTagForm.controls.id.setValue(data.id);
    })
  }
  onSubmit(){
    this.tagService
      .editTag(this.editTagForm.value)
      .subscribe((p) => this.router.navigate(["/admin/tags"]));
  }
  ngOnInit(): void {
  }

}
