import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Car[],  text:string): Car[] {
    
    text=text ? text.toLocaleLowerCase():"";

   const filterText = text ? value.filter((c:Car)=> c.model.name.toLocaleLowerCase().indexOf(text)!==-1):value;
  return filterText;
  }

}
