import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public value = '';
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
}
