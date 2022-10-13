import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { InspirationsComponent } from './inspirations/inspirations.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { EgyediPipe } from './shared/egyedi.pipe'; 
import { FilterPipe } from './shared/filter.pipe'; 
import { PaintingListComponent } from './paintings/painting-list/painting-list.component';
import { PaintingDetailsComponent } from './paintings/painting-details/painting-details.component';
import { PaintComponent } from './paintings/painting-list/paint/paint.component';
import { AuthComponent } from './auth/auth.component'; 
import { LoadingComponent } from './shared/loading-spinner/loading.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HowToShopComponent } from './sub-pages/how-to-shop/how-to-shop.component';
import { TermsConditionsComponent } from './sub-pages/terms-conditions/terms-conditions.component';
import { QAComponent } from './sub-pages/q-a/q-a.component';
import { AlertComponent } from './shared/alert/alert.component'; 
import { HttpClientModule } from '@angular/common/http';
//import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
//import { fas } from '@fortawesome/free-solid-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaintingsComponent,
    InspirationsComponent,
    ShoppingBasketComponent,
    FavouritesComponent,
    EgyediPipe,
    FilterPipe,
    PaintingListComponent,
    PaintingDetailsComponent,
    PaintComponent,
    AuthComponent,
    LoadingComponent,
    LandingPageComponent,
    HowToShopComponent,
    TermsConditionsComponent,
    QAComponent,
    AlertComponent
  
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    //FontAwesomeModule,
    //FaIconLibrary

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 /* constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }*/
 }
