import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
  providers: [MessageService]
})
export class ProductUpdateComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService, 
    private productService:ProductService, private activatedRoute:ActivatedRoute, private messageService: MessageService) { }

  productAddForm:FormGroup
  selectedId:number;
  product:Product;
  categories:Category[]

  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      id:[this.product.id,Validators.required],
      name:[this.product.name,Validators.required],
      unitPrice:[this.product.unitPrice,Validators.required],
      unitsInStock:[this.product.unitsInStock,Validators.required],
      categoryId:[this.product.categoryId,Validators.required],
    })
  }

  ngOnInit(): void {
    this.getCategory()
    this.getProductById()
  }
  getCategory(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }
  update(){
    if(this.productAddForm.valid){
      this.product = Object.assign({},this.productAddForm.value)
    }
    this.productService.updateProduct(this.product).subscribe(data=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Ürün Güncellendi'});
    })
  }
  getProductById() {
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) this.selectedId = params['id'];
    });
    this.productService.getProductById(this.selectedId).subscribe(data=>{
      this.product = data;
      this.createProductAddForm()
    })
  }
}
