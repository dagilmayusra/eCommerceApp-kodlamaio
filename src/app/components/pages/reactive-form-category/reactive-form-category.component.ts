import { Category } from 'src/app/models/category';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-reactive-form-category',
  templateUrl: './reactive-form-category.component.html',
  styleUrls: ['./reactive-form-category.component.css']
})
export class ReactiveFormCategoryComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService) { }

  categoryAddForm:FormGroup

  category:Category=new Category()
  categories:Category[]

  createcategoryAddForm(){
    this.categoryAddForm=this.formBuilder.group({
      name:["",Validators.required]      
    })
  }

  ngOnInit(): void {
    this.createcategoryAddForm()
    
  }
  
  add(){
    if(this.categoryAddForm.valid){
      this.category=Object.assign({},this.categoryAddForm.value)
    }
    this.categoryService.addCategory(this.category).subscribe(data=>{
      alert(data.name +"başarılıyla eklendi")

      location.reload()
    })
  }

}
