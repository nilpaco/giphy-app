import {
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';

import { Injectable } from '@angular/core';

export const API_KEY = '1Kot8ia8mzRIMWVoxJu5d6zPUHkNPlnz';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ) {
        request = request.clone({
            setParams: {
                api_key: API_KEY
            }
        });
        return next.handle(request);
    }
}
