import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SortingMethods } from 'src/app/constant';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  @Output() onSortingBy = new EventEmitter<SortingMethods>();
  @Output() onInputBy = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sortingBy(sortingMethod: number) {
    this.onSortingBy.emit(sortingMethod ? SortingMethods.ViewsCount : SortingMethods.Date);
  }
}
