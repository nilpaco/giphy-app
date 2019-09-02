import { Component, Input, OnInit } from '@angular/core';

import { Giphy } from 'src/app/core/store/entity/giphy/giphy.model';

@Component({
  selector: 'gif-card',
  template: `<img alt="gif" [src]="giphy?.images?.fixed_width_downsampled?.url">`,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() giphy: Giphy;

  constructor() { }

  ngOnInit() {
  }

}
