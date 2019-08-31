import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { loadMore, loadMoreSuccess, search, searchSuccess, trending, trendingSuccess } from './giphy.actions';

import { Giphy } from './giphy.model';

export const giphiesFeatureKey = 'giphies';

export interface GiphyState extends EntityState<Giphy> {
  isLoading: boolean;
  search: string;
  page: number;
  totalCount: number;
}

export const giphyAdapter: EntityAdapter<Giphy> = createEntityAdapter<Giphy>();

export const initialState: GiphyState = giphyAdapter.getInitialState({
  isLoading: false,
  search: '',
  page: 0,
  totalCount: 0
});

const reducer = createReducer(
  initialState,
  on(trending, state => ({ ...state, isLoading: true })),
  on(trendingSuccess, (state, action) => giphyAdapter.addAll(action.giphies, { ...state, isLoading: false })),
  on(search, (state, action) => ({ ...state, isLoading: true, search: action.search, totalCount: null })),
  on(searchSuccess, (state, action) => giphyAdapter.addAll(action.giphies, { ...state, isLoading: false, totalCount: action.totalCount })),
  on(loadMore, state => ({ ...state, page: state.page + 1 })),
  on(loadMoreSuccess, (state, action) => giphyAdapter.addMany(action.giphies, { ...state, isLoading: false })),
);

export function giphyReducer(state: GiphyState | undefined, action: Action) {
  return reducer(state, action);
}
