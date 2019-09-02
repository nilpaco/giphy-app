import { Action, Store } from '@ngrx/store';

import { AppState } from '../store';
import { GiphyResolversModule } from './giphy-resolver.module';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { loadOne } from '../store/entity/giphy/giphy.actions';

@Injectable({ providedIn: GiphyResolversModule })
export class GiphyResolver implements Resolve<void> {
  constructor(private store: Store<AppState>) {}

  resolve() {
    return this.store.dispatch(loadOne());
  }
}
