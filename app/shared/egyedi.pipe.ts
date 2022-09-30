import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordlimit' //a képek szövegénél vagy a képek listázásánál fogom használni
})
export class EgyediPipe implements PipeTransform {

  transform(value:any, limit: number=12) {

    if(value.length > limit)
    return value.substr(0, limit) + '... ';
    return value;
  }

}
