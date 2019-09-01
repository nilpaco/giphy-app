import { Store, select } from '@ngrx/store';
import { loadOne, search, trending } from '../store/entity/giphy/giphy.actions';

import { AppState } from '../store';
import { GiphyResolversModule } from './giphy-resolver.module';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { getSearch } from '../store/entity/giphy/giphy.selector';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: GiphyResolversModule })
export class GiphyResolver implements Resolve<boolean> {
    constructor(private store: Store<AppState>) { }

    resolve() {
        this.store.dispatch(loadOne());
        return true;
    }
}
