import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { switchMap, take } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ) {
        return next.handle(request);
    }
}
