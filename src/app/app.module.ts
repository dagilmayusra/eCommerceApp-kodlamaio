import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { NaviComponent } from './common/navi/navi.component';
import { CategoriesComponent } from './common/categories/categories.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './components/pages/product/product.component'
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { VatPipe } from './pipes/vat.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FormComponent } from './components/pages/form/form.component';
import { ReactiveFormProductComponent } from './components/pages/reactive-form-product/reactive-form-product.component';
import { ReactiveFormCategoryComponent } from './components/pages/reactive-form-category/reactive-form-category.component';
import { ProductUpdateComponent } from './components/pages/product-update/product-update.component';
import {ToastModule} from 'primeng/toast';

import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { UsersComponent } from './components/pages/users/users.component';
import { CartSummaryComponent } from './common/cart-summary/cart-summary.component';
import {DropdownModule} from 'primeng/dropdown';

//import {RippleModule} from 'primeng/ripple';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CategoriesComponent,
    ProductComponent,
    VatPipe,
    FilterPipe,
    FilterCategoryPipe,
    FormComponent,
    ReactiveFormProductComponent,
    ReactiveFormCategoryComponent,
    ProductUpdateComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    CartSummaryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    ListboxModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
