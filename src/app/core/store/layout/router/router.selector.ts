import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router.model';

export interface State {
    router: RouterReducerState<RouterStateUrl>;
}

/**
 * get the current router state
 */
export const getReducerState = createFeatureSelector<State, RouterReducerState<RouterStateUrl>>('router');

export const getReducerData = createSelector(
    getReducerState,
    (routerState: RouterReducerState<RouterStateUrl>) => {
        return routerState && routerState.state;
    }
);

export const getRouterParams = createSelector(
    getReducerData,
    (routerState: RouterStateUrl) => {
        return routerState && routerState.params;
    }
);

export const getGiphyId = createSelector(
    getRouterParams,
    (params: Params) => {
        return params && params.giphyId;
    }
);
