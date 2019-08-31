import { Store, select } from '@ngrx/store';
import { getIsLoading, getSearchAndTotalCount, selectAllGiphies } from './giphy.selector';
import { loadMore, search } from './giphy.actions';

import { AppState } from '../..';
import { CoreModule } from 'src/app/core/core.module';
import { Giphy } from './giphy.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class GiphyFacade {
  giphies$: Observable<Giphy[]>;
  isLoading$: Observable<boolean>;
  searchalueAndTotalCount$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.giphies$ = this.store.pipe(select(selectAllGiphies));
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.searchalueAndTotalCount$ = this.store.pipe(select(getSearchAndTotalCount));
  }

  search(value: string) {
    this.store.dispatch(search({ search: value }));
  }

  loadMore() {
    this.store.dispatch(loadMore());
  }

}
