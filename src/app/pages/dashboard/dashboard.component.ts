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

  constructor(private giphyFacade: GiphyFacade) {
    this.giphies$ = this.giphyFacade.giphies$;
    this.isLoading$ = this.giphyFacade.isLoading$;
  }

  ngOnInit() {
  }

  onScroll() {
    console.log('scroll');

    this.giphyFacade.loadMore();
  }

}
