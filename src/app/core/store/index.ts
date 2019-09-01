import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { GiphyState, giphyReducer } from './entity/giphy/giphy.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

import { RouterStateUrl } from './layout/router';
import { environment } from '../../../environments/environment';

export interface AppState {
  giphy: GiphyState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  giphy: giphyReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
