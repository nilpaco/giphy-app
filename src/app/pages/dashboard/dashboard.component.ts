import { Component } from '@angular/core';
import { Giphy } from 'src/app/core/store/entity/giphy/giphy.model';
import { GiphyFacade } from 'src/app/core/store/entity/giphy/giphy-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'gif-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  giphies$: Observable<Giphy[]>;
  isLoading$: Observable<boolean>;
  totalCount$: Observable<number>;
  search$: Observable<string>;

  constructor(private giphyFacade: GiphyFacade) {
    this.giphies$ = this.giphyFacade.giphies$;
    this.isLoading$ = this.giphyFacade.isLoading$;
    this.totalCount$ = this.giphyFacade.totalCount$;
    this.search$ = this.giphyFacade.search$;
  }

  onScroll() {
    this.giphyFacade.loadMore();
  }

  navigate(giphy: Giphy) {
    this.giphyFacade.navigateToGiphy(giphy.id);
  }
}
