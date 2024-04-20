import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, of, throwError } from "rxjs";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private readonly router: Router) {}

    private handleError(error: HttpErrorResponse): Observable<any> {
        if(error.status === 401 || error.status === 403) {
            this.router.navigateByUrl('/no-access');

            return of(error.message);
        }

        return throwError(() => error);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(error => this.handleError(error)));
    }
}