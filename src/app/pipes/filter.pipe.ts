import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
