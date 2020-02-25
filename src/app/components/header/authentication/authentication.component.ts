import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styles: [`
    img {
      margin-top: 8px;
      margin-left: 8px;
      cursor: pointer;
    }
    span {
      font-size: 12px;
      line-height: 14px;
      color: #4F4F4F;
    }
  `]
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
