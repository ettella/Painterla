import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponse } from "./auth-response.model";

import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, throwError } from "rxjs";

import { User } from "./user.model";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    user = new BehaviorSubject<User>(new User('', '', '', new Date()));
    private tokenTimer: any; 

    constructor(private http: HttpClient,
                private router: Router){}

    signup(email: string, password: string){
        return this.http
        .post<AuthResponse>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBy3FbH7_GsHVpE8dujUsmfI_LiHCqFWAc',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
        .pipe(
            catchError(this.handleError),
            tap( resData => { 
                this.handleAutentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn) })
        );
    }

    login(email: string, psw: string){
        return this.http.post<AuthResponse>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBy3FbH7_GsHVpE8dujUsmfI_LiHCqFWAc',
            {
                email: email,
                password: psw,
                returnSecureToken: true
            })
        .pipe(
            catchError(this.handleError),
            tap( resData => { 
                this.handleAutentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn) }) 
        );
    }

    private handleAutentication(email: string, id: string, token: string, lejar: number){
        const lejarat = new Date(new Date().getTime() + lejar*1000 );
        const u = new User(email, id, token, lejarat);
        this.user.next(u);
        console.log(lejar + " másodperc");
        this.autoLogout(lejar*1000);
        localStorage.setItem('userData', JSON.stringify(u)) 
    }

    private handleError(errorResp: HttpErrorResponse){
        let error = ''
            switch( errorResp.error.error.message ){
                case 'EMAIL_EXISTS':
                    error = 'Ez az e-mail cím már be van regisztrálva!';
                    break;
                case 'OPERATION_NOT_ALLOWED':
                    error = 'Nincs jogosultságot ehhez a funkciókhoz!';
                    break;
                case 'EMAIL_NOT_FOUND':
                    error = 'Nincs ilyen felhasználó regisztrálva!';
                    break;
                case 'INVALID_PASSWORD':
                    error = 'Hibás az e-mail címhez tartozó jelszó!';
                    break;
                case 'USER_DISABLED':
                    error = 'Ez a felhasználói fiók jelenleg tiltás alatt van!';
                    break;
                default:
                    error = 'Valamilyen hiba (ismeretlen) történt!';
                    break;
            }
            return throwError(error);
    }

    
    
    autoLogin() {
        let udString = localStorage.getItem('userData');
        if(udString == null)
        udString = "";

        if(udString =="" || udString == null) return; 
        
        const userData: 
        {email: string, 
            id:string, 
            _token: string, 
            _tokenDate: Date} = JSON.parse( udString ); 
            
            
        const u = new User(userData.email, userData.id, userData._token, userData._tokenDate);
            
        console.log(u);
        if( u.token) {
                this.user.next(u);
                const lejarat = new Date(userData._tokenDate).getTime()- new Date().getTime();
                this.autoLogout(lejarat);
                //this.autoLogout(3000) 
            }
        }
        

    logout() { 
            this.user.next(new User('', '', '', new Date()));
            this.router.navigate(['/auth']);
            //localStorage.clear(); 
            localStorage.removeItem('userData');

            if( this.tokenTimer) {
                clearTimeout(this.tokenTimer);
            }
            this.tokenTimer = null; 
    }


    autoLogout(tokenTime: number) {
       this.tokenTimer = setTimeout( () => {this.logout(); }, tokenTime); 
    }
}