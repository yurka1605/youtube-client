import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { SortingMethods } from '../constant';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  public transform(items: SearchItem[], params: [SortingMethods, string]): SearchItem[] {
    switch (params[0]) {
      case SortingMethods.Date:
        break;
      case SortingMethods.ViewsCount:
        break;
      default:
        break;
    }
    return null;
  }

}
