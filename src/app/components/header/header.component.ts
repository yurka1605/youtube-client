import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onChange = new EventEmitter<string>();
  @Output() toggleSortingShow = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
