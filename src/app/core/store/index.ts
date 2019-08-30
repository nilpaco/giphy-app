import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { environment } from '../../../environments/environment';

export interface State {
}

export const reducers: ActionReducerMap<State> = {
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
