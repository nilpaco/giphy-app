import { Store, select } from '@ngrx/store';
import { getCurrentGiphy, getIsLoading, getSearch, getTotalCount, selectAllGiphies } from './giphy.selector';
import { loadMore, search, trending } from './giphy.actions';

import { AppState } from '../..';
import { CoreModule } from 'src/app/core/core.module';
import { Giphy } from './giphy.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: CoreModule
})
export class GiphyFacade {
  giphies$: Observable<Giphy[]>;
  giphy$: Observable<Giphy>;
  isLoading$: Observable<boolean>;
  totalCount$: Observable<number>;
  search$: Observable<string>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.giphies$ = this.store.pipe(select(selectAllGiphies));
    this.giphy$ = this.store.pipe(select(getCurrentGiphy));
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.totalCount$ = this.store.pipe(select(getTotalCount));
    this.search$ = this.store.pipe(select(getSearch));
  }

  search(value: string) {
    this.router.navigate(['']);
    this.store.dispatch(search({ search: value }));
  }

  trending() {
    this.router.navigate(['']);
    this.store.dispatch(trending());
  }

  loadMore() {
    this.store.dispatch(loadMore());
  }

  navigateToGiphy(giphyId: string) {
    this.router.navigate(['gifs', giphyId]);
  }
}
