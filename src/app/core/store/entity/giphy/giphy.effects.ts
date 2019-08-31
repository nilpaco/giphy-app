import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, debounceTime, distinctUntilChanged, exhaustMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { loadMore, loadMoreSuccess, search, searchSuccess, trending, trendingSuccess } from './giphy.actions';

import { AppState } from '../..';
import { EMPTY } from 'rxjs';
import { GiphyService } from 'src/app/core/services';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUrlParams } from './giphy.selector';

@Injectable()
export class GiphyEffects {
  constructor(private actions$: Actions, private giphyService: GiphyService, private store: Store<AppState>) { }

  trending$ = createEffect(() => this.actions$.pipe(
    ofType(trending),
    mergeMap(() => {
      return this.giphyService.trending()
        .pipe(
          map(giphies => {
            return trendingSuccess({ giphies });
          }),
          catchError(() => EMPTY)
        );
    })
  ));

  search$ = createEffect(() => this.actions$.pipe(
    ofType(search),
    debounceTime(500),
    distinctUntilChanged(),
    mergeMap((action) => {
      return this.giphyService.search(action.search)
        .pipe(
          map(({ giphies, totalCount }) => searchSuccess({ giphies, totalCount })),
          catchError(() => EMPTY)
        );
    })
  ));

  loadMore$ = createEffect(() => this.actions$.pipe(
    ofType(loadMore),
    withLatestFrom(this.store.select(getUrlParams)),
    exhaustMap(([action, urlParams]: [any, any]) => {
      return this.giphyService.search(urlParams.search, (urlParams.page + 1) * 25)
        .pipe(
          map(({ giphies, totalCount }) => searchSuccess({ giphies, totalCount })),
          catchError(() => EMPTY)
        );
    })
  ));

}
