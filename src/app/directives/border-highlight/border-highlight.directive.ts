import * as moment from 'moment';
import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBorderHighlight]'
})
export class BorderHighlightDirective implements OnInit {
  
  public borderBottomColor: string;
  @Input("appBorderHighlight") dateCreate: string;

  @HostBinding("style.borderBottomColor") get getFontSize() {
		return this.borderBottomColor;
	}

  constructor() {
  }

  ngOnInit() {
    const now = moment();
    const dateCreate = moment(this.dateCreate);

    const years = now.diff(dateCreate, 'year');
    dateCreate.add(years, 'years');

    let months = now.diff(dateCreate, 'months');
    dateCreate.add(months, 'months');
    months = months + years * 12;

    const days = now.diff(dateCreate, 'days');

    if (months === 0) {
      // < 7 дней - зеленый, > 7 ,но меньше месяца синий
      this.borderBottomColor = days < 7 ? '#2F80ED' : '#27AE60';
    } else {
      // > 6 месяцев - красный, < 6 ,но больше одного ставим желтый
      this.borderBottomColor = months >= 6 ? '#EB5757' : '#F2C94C';
    }
  }
}
