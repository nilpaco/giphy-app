import { Params } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export const routerInitialState = {
    state: {
        url: '/',
        params: {},
        queryParams: {}
    },
    navigationId: 0
};
