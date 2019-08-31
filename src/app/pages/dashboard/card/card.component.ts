import { Component, Input, OnInit } from '@angular/core';

import { Giphy } from 'src/app/core/store/entity/giphy/giphy.model';

@Component({
  selector: 'gif-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() giphy: Giphy;

  constructor() { }

  ngOnInit() {
  }

}
