import { UsersComponent } from './components/pages/users/users.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductUpdateComponent } from './components/pages/product-update/product-update.component';
import { ReactiveFormCategoryComponent } from './components/pages/reactive-form-category/reactive-form-category.component';
import { ReactiveFormProductComponent } from './components/pages/reactive-form-product/reactive-form-product.component';
import { FormComponent } from './components/pages/form/form.component';
import { ProductComponent } from './components/pages/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch: "full", component:ProductComponent},
  {path: "product/:id", component:ProductComponent},
  {path: "form/product",  component:FormComponent}, 
  {path: "reactive/form/product", component: ReactiveFormProductComponent},
  {path: "reactive/form/category", component: ReactiveFormCategoryComponent},
  {path: "product-update/:id", component: ProductUpdateComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "users", component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
