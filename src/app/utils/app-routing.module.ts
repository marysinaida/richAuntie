import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartCheckoutComponent } from '../components/cart-checkout/cart-checkout.component';
import { CartComponent } from '../components/cart/cart.component';
import { GetAQuoteComponent } from '../components/get-a-quote/get-a-quote.component';
import { HomeComponent } from '../components/home/home.component';
import { ShopComponent } from '../components/shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  {path:'home', component: HomeComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'quote', component: GetAQuoteComponent },
  {path: 'viewCart', component: CartComponent},
  {path: 'checkout', component: CartCheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routing = RouterModule.forRoot(routes);
