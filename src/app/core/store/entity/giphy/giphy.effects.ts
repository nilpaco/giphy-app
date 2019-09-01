import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, debounceTime, distinctUntilChanged, exhaustMap, filter, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { loadMore, loadMoreSuccess, loadOne, loadOneSuccess, search, searchSuccess, trending, trendingSuccess } from './giphy.actions';

import { AppState } from '../..';
import { EMPTY } from 'rxjs';
import { GiphyService } from 'src/app/core/services';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getGiphyId } from '../../layout/router';
import { getUrlParams } from './giphy.selector';

@Injectable()
export class GiphyEffects {
  constructor(
    private actions$: Actions,
    private giphyService: GiphyService,
    private store: Store<AppState>,
    private router: Router
  ) { }

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
    tap(res => {
      if (!res.search) {
        this.store.dispatch(trending());
      }
    }),
    filter(res => !!res.search),
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
    filter((res: any[]) => res[1].search),
    exhaustMap(([action, urlParams]: [any, any]) => {
      return this.giphyService.search(urlParams.search, urlParams.page * 25)
        .pipe(
          map(({ giphies, totalCount }) => loadMoreSuccess({ giphies })),
          catchError(() => EMPTY)
        );
    })
  ));

  loadOne$ = createEffect(() => this.actions$.pipe(
    ofType(loadOne),
    withLatestFrom(this.store.select(getGiphyId)),
    exhaustMap(([action, giphyId]: [any, string]) => {
      return this.giphyService.loadOne(giphyId)
        .pipe(
          map((giphy) => loadOneSuccess({ giphy })),
          catchError(() => {
            this.router.navigate(['404']);
            return EMPTY;
          })
        );
    })
  ));

}
