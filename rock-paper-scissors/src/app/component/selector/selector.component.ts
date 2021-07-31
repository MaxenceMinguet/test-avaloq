import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { style } from 'typestyle';

@Component({
  selector: 'rps-selector',
  templateUrl: './selector.component.html',
})
export class SelectorComponent implements OnInit, OnChanges {
  @Input() isSelected: boolean = false;
  selector: any = null;

  ngOnInit() {
    console.log('ngOnInit', this.isSelected);
    this.selector = style({
      background: this.isSelected ? '#6666b9' : 'none',
    });
  }

  ngOnChanges() {
    this.selector = style({
      background: this.isSelected ? '#6666b9' : 'none',
    });
  }
}
