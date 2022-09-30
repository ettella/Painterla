import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { Observable, Subscription } from "rxjs";
import { AuthResponse } from "./auth-response.model";
import { AuthService } from "./auth.service";

import { AlertComponent } from "../shared/alert/alert.component"; 
// import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    styleUrls: ['./auth.component.scss'],
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
    loginMode: boolean = true;
    loading: boolean = false;
    // error: string = '';
    errorSub: Subscription = new Subscription();
    // @ViewChild(PlaceholderDirective) alertHelye: PlaceholderDirective = <PlaceholderDirective>{};


    constructor(private authService: AuthService,
                private router: Router,
                private compFactoryResolver: ComponentFactoryResolver ){}

    onSwitchLoginMode(){
      this.loginMode = !this.loginMode;
    }

    onFormSubmit(form: NgForm){
        if(!form.valid) return;     // Ha nem valid a form, akkor nem hajtjuk végre a többit

        // console.log(form.value);
        const email = form.value.email;
        const psw = form.value.password;

        let authObs: Observable<AuthResponse>;

        this.loading = true;    // elkezdtük a betöltést
        if(this.loginMode)
            authObs =  this.authService.login(email, psw);
        else
            authObs = this.authService.signup(email, psw);

        authObs.subscribe(
            response => { 
                console.log(response);
                this.loading = false;
                //this.error = '';
                this.router.navigate(['/receptkonyv']);
            },
            error => {
                // console.log("Hiba: " + error);
                //this.error = error;
                this.ErrorAlert(error);
                this.loading = false;
            }
        );

        form.reset();
    }

    onHandleError(){
        // this.error = '';
    }

    private ErrorAlert(hibaUzenet: string){
       //  const alertComp = new AlertComponent(); ez nem jó nekünk!
       const alertComp = this.compFactoryResolver.resolveComponentFactory(AlertComponent);

      //  const alertHelyeRef = this.alertHelye.viewContainerRef;
      //  alertHelyeRef.clear(); //ez azért kell, hogy nulláról induljunk, üritünk

      // ---- placeholder direktiva ?
      
      //  const compRef = alertHelyeRef.createComponent(alertComp); //majd készit egy alertkompot

      //  compRef.instance.uzenet = hibaUzenet;
      //  this.errorSub = compRef.instance.bezaras.subscribe(() => {
      //       this.errorSub.unsubscribe();
      //       alertHelyeRef.clear();
      //  });
       
    }

    ngOnDestroy(): void {
        if(this.errorSub)
        this.errorSub.unsubscribe();
    }
}
