import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false  // recalculates when anything changes, but comes with performance hits
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString == '') {
      return value;
    }
    const resultArray = []

    for (const item of value) {
      if (item[propName].includes(filterString)) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}