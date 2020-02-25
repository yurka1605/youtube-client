import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortingMethods } from 'src/app/constant';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() methodSort: SortingMethods;
  @Input() searchResults: SearchItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
