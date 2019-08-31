import { Component, OnInit } from '@angular/core';

import { GiphyFacade } from '../../store/entity/giphy/giphy-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'gif-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchalueAndTotalCount$: Observable<any>;

  constructor(private giphyFacade: GiphyFacade) {
    this.searchalueAndTotalCount$ = this.giphyFacade.searchalueAndTotalCount$;
  }

  ngOnInit() {
  }

  search(value: string) {
    this.giphyFacade.search(value);
  }

}
