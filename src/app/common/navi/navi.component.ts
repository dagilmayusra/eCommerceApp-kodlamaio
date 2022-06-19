import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/']},
      {label: 'Product Add', icon: 'pi pi-fw pi-calendar', routerLink: ['/form/product']},
      {label: 'Reactive Add Product', icon: 'pi pi-fw pi-pencil', routerLink: ['/reactive/form/product']},
      {label: 'Reactive Add Category', icon: 'pi pi-fw pi-file', routerLink: ['/reactive/form/category']},
      {label: 'Users', icon: 'pi pi-fw pi-cog', routerLink: ['/users']}
    ];
  }

}
