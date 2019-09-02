import { Store, select } from '@ngrx/store';
import { search, trending } from '../store/entity/giphy/giphy.actions';

import { AppState } from '../store';
import { GiphyResolversModule } from './giphy-resolver.module';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { getSearch } from '../store/entity/giphy/giphy.selector';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: GiphyResolversModule })
export class GiphiesResolver implements Resolve<void> {
  constructor(private store: Store<AppState>) {}

  resolve() {
    this.store
      .pipe(
        select(getSearch),
        take(1)
      )
      .subscribe((res: string) => {
        if (res) {
          return this.store.dispatch(search({ search: res }));
        } else {
          return this.store.dispatch(trending());
        }
      });
  }
}
