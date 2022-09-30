import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
// import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy{      
    private userSub: Subscription = new Subscription();
    isUserLogin: boolean = false;
    filtering: string = '';
    
    constructor(
      // private dsService: DataStorageService,
                private authService: AuthService){}

    ngOnInit(): void {
        this.userSub =  this.authService.user.subscribe( user => {
            if( user.email == '' || user.token == '')
                this.isUserLogin = false;
            else
                this.isUserLogin = true;

            console.log(!!user);
        } );
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
        this.isUserLogin = false;
    }
    onLogout(){
        this.authService.logout();
    }
}
