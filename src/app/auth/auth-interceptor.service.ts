import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpParams,
    HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { exhaustMap, take } from "rxjs/operators"
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

   constructor(private authService: AuthService){}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return this.authService.user.pipe(
           take(1),
           exhaustMap( user => {
               if( user.email == '' || user.token == '')
                   return next.handle(req);

               const modositottReq = req.clone( 
                   { params: new HttpParams().set('auth', user.token ? user.token : 'null' ) } )

               return next.handle(modositottReq);
           } ) );       
   }
}