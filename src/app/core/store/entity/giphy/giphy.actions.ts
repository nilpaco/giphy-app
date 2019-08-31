import { createAction, props } from '@ngrx/store';

import { Giphy } from './giphy.model';

export const trending = createAction(
  '[Giphy] Trending'
);

export const trendingSuccess = createAction(
  '[Giphy] Trending Success',
  props<{ giphies: Giphy[] }>()
);

export const search = createAction(
  '[Giphy] Search',
  props<{ search: string }>()
);

export const searchSuccess = createAction(
  '[Giphy] Search Success',
  props<{ giphies: Giphy[], totalCount: number }>()
);

export const loadMore = createAction(
  '[Giphy] Load More'
);

export const loadMoreSuccess = createAction(
  '[Giphy] Load More Success',
  props<{ giphies: Giphy[] }>()
);
