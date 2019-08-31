import { search, trending } from '../store/entity/giphy/giphy.actions';

import { AppState } from '../store';
import { GiphyResolversModule } from './giphy-resolver.module';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: GiphyResolversModule })
export class GiphyResolver implements Resolve<boolean> {
	constructor(private store: Store<AppState>) { }

	resolve() {
		this.store.dispatch(trending());
		return true;
	}
}
