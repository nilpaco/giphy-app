import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { GiphyState, giphyReducer } from './entity/giphy/giphy.reducer';

import { environment } from '../../../environments/environment';

export interface AppState {
  giphy: GiphyState;
}

export const reducers: ActionReducerMap<AppState> = {
  giphy: giphyReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
