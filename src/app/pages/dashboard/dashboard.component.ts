import { Component, OnInit } from '@angular/core';

import { Giphy } from 'src/app/core/store/entity/giphy/giphy.model';
import { GiphyFacade } from 'src/app/core/store/entity/giphy/giphy-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'gif-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  giphies$: Observable<Giphy[]>;
  isLoading$: Observable<boolean>;
  searchalueAndTotalCount$: Observable<any>;

  constructor(private giphyFacade: GiphyFacade) {
    this.giphies$ = this.giphyFacade.giphies$;
    this.isLoading$ = this.giphyFacade.isLoading$;
    this.searchalueAndTotalCount$ = this.giphyFacade.searchalueAndTotalCount$;
  }

  ngOnInit() {
  }

  onScroll() {
    this.giphyFacade.loadMore();
  }

  navigate(giphy: Giphy) {
    this.giphyFacade.navigateToGiphy(giphy.id);
  }

}
