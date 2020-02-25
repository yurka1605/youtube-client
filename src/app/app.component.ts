import { Component } from '@angular/core';
import { SearchItem } from './models/search-item.model';
import { mockDataYoutube } from './mock-data';
import { SortingMethods } from './constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = "Youtube client";
  public isShowSorting = false;
  public searchData: SearchItem[];
  public sortingParams: [SortingMethods, string];

  constructor() {
  }

  getNewPosts(searchString: string): void {
    const regexp = new RegExp(searchString);
    this.searchData = mockDataYoutube.items.filter(( item: SearchItem ) => regexp.test(item.snippet.title));
  }
}
