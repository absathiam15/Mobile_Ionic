import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private storage: Storage) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('test interceptor');
    return from(this.storage.get('auth-token'))
      .pipe(
        switchMap(token => {
          if (token !== null) {
            request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
          }

          return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                return event;
              }
              return;
            }),
            catchError((error: HttpErrorResponse) => {
              return throwError(error);
            })
          );
        })
      );
  }
}

export const HTTPInterceptorServiceProvider =  {
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true,
  deps: [Storage]
};
