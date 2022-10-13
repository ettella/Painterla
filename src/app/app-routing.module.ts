import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthlogoutGuard } from './auth/authlogout.guard';
import { FavouritesComponent } from './favourites/favourites.component';
import { InspirationsComponent } from './inspirations/inspirations.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { HowToShopComponent } from './sub-pages/how-to-shop/how-to-shop.component';
import { QAComponent } from './sub-pages/q-a/q-a.component';
import { TermsConditionsComponent } from './sub-pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {path:'paintings', component: PaintingsComponent},
  {path:'inspirations', component: InspirationsComponent},
  {path:'favourites', component: FavouritesComponent},
  {path:'auth', component: AuthComponent},
  { path: '', component: AuthComponent, canActivate: [AuthlogoutGuard],},
  {path:'shopping-basket', component: ShoppingBasketComponent},
  {path:'how-to-shop', component: HowToShopComponent},
  {path:'q-a', component: QAComponent},
  {path:'terms-conditions', component: TermsConditionsComponent},
  {path:'landing-page', component: LandingPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
