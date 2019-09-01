import { Component } from '@angular/core';
import { GiphyFacade } from '../../store/entity/giphy/giphy-facade.service';

@Component({
  selector: 'gif-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  value: string;

  constructor(private giphyFacade: GiphyFacade) { }


  search(value: string) {
    this.giphyFacade.search(value);
  }

}
