import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, property?: string): any[] {
    if (!items || (!searchText && !property)) {
      return items;
    }

    if (property) {
      return items.filter(item => item[property]?.toLowerCase().includes(searchText?.toLowerCase()));
    }

    return items.filter(item => this.itemMatchesSearch(item, searchText));
  }

  private itemMatchesSearch(item: any, searchText: string): boolean {
    searchText = searchText.toLowerCase();

    for (const key in item) {
      if (typeof item[key] === 'string' && item[key].toLowerCase().includes(searchText)) {
        return true;
      }
    }

    return false;
  }



}
