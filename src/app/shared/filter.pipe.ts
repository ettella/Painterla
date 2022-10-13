import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter', //search inputhoz - festmények keresésénél
  pure: false //alapból true, azért kell hogy false legyen, hpgy az új keresési eredményt is behozza kereséskor
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterSzoveg: string, tulajdonsag: string) {
    if(value.length == 0 || filterSzoveg === '')
    return value; 

    let filterEredmeny: Array<any> = [];
    for(let item of value)
    if(item[tulajdonsag].includes(filterSzoveg)){
      filterEredmeny.push(item);
    }

    return filterEredmeny;
  }

}
