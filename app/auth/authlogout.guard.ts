import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators"
import { AuthService } from "./auth.service";


@Injectable({
    providedIn: 'root'
})
export class AuthlogoutGuard implements CanActivate{ //autentikáció nélkül ne lehessen hozzáférni, ez azért jó

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.authService.user.pipe(
            map( user => {
                if( user.email != '')
                    return false;
                    //return this.router.createUrlTree(['/receptkonyv']);
                else
                    return true; 
            }),
    
       );
   }
}
