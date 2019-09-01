import { GiphyState, giphyAdapter } from './giphy.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Dictionary } from '@ngrx/entity';
import { Giphy } from './giphy.model';
import { getGiphyId } from '../../layout/router';

/**
 * SIMPLE SELECTORS
 */
export const getGiphyState = createFeatureSelector<GiphyState>(
    'giphy'
);

export const {
    selectIds: selectGiphiesIds,
    selectEntities: getGiphies,
    selectAll: selectAllGiphies,
    selectTotal: selectTotalGiphies
} = giphyAdapter.getSelectors(getGiphyState);

export const getIsLoading = createSelector(
    getGiphyState,
    (giphyState: GiphyState) => {
        return giphyState.isLoading;
    }
);

export const getUrlParams = createSelector(
    getGiphyState,
    (giphyState: GiphyState) => {
        return { search: giphyState.search, page: giphyState.page };
    }
);

export const getSearch = createSelector(
    getGiphyState,
    (giphyState: GiphyState) =>
        giphyState && giphyState.search
);

export const getSearchAndTotalCount = createSelector(
    getGiphyState,
    (giphyState: GiphyState) =>
        giphyState.search && giphyState.totalCount && { search: giphyState.search, totalCount: giphyState.totalCount }
);

export const getCurrentGiphy = createSelector(
    getGiphies,
    getGiphyId,
    (giphies: Dictionary<Giphy>, giphyId: string) => {
        return giphyId && giphies[giphyId];
    }
);
