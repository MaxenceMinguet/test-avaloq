import { Component, Input, OnInit } from '@angular/core';
import { style } from 'typestyle';

@Component({
  selector: 'rps-container',
  templateUrl: './container.component.html',
})
export class ContainerComponent implements OnInit {
  @Input() width: string = '20%';
  container: any = null;

  ngOnInit() {
    this.container = style({
      height: '100%',
      width: this.width,
      display: 'inline-block',
    });
  }
}
