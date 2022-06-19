import { Category } from './../models/category';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(value: Category[], filterText: string): Category[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Category)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
