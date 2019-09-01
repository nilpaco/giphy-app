import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';

import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from './router.model';

export class CustomSerializer
    implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state: ActivatedRouteSnapshot = routerState.root;
        const params: Params = {};
        // get all the params from the activated router snapshot
        while (state.firstChild) {
            // get the params from the route snapshot
            for (const key of Object.keys(state.firstChild.params)) {
                params[key] = state.firstChild.params[key];
            }
            state = state.firstChild;
        }
        return { url, queryParams, params };
    }
}
