import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators"
import { AuthService } from "./auth.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{ //autentikáció nélkül ne lehessen hozzáférni, ez azért jó

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.authService.user.pipe(
            map( user => {
                if( user.email == ''  || user == null)
                    return this.router.createUrlTree(['/auth']);
                else
                    return true;
            }),
        
       );
        
    }

}