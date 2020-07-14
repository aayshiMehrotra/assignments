import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(sortData:Array<any>, sortValue: string, sortType: string, originalData: Array<any>): unknown {
    if(sortType === 'reset') {
      return originalData;
    }
    if(sortData) {
      return sortData.sort((val1:any, val2: any)=> {
        if(sortType === 'desc') {
            //return val1.price - val2.price;
            if(parseInt( val1[sortValue]) >parseInt( val2[sortValue])) { return -1; }
            if(parseInt( val1[sortValue]) <parseInt( val2[sortValue])) { return 1; }
            return 0;
        }else if(sortType === 'asc') {
          //returnparseInt( val2[sortValue]) -parseInt( val1[sortValue]);
          if(parseInt( val1[sortValue]) <parseInt( val2[sortValue])) { return -1; }
            if(parseInt( val1[sortValue]) >parseInt( val2[sortValue])) { return 1; }
            return 0;
        }
      })
    }
    
  }

}
