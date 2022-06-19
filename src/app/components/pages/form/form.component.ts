import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model:Product= new Product();

  categories: Category[];

  constructor(private categoryService:CategoryService, private productService:ProductService) { }


  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }
  add(form:NgForm){

    this.productService.addProduct(this.model).subscribe(data=>{
      alert(data.name +"başarılıyla eklendi")
    })
  }
}
