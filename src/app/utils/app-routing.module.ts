import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';
import { HomeComponent } from '../components/home/home.component';
import { ShopComponent } from '../components/shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  {path:'home', component: HomeComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'quote', component: HomeComponent },
  {path: 'viewCart', component: CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routing = RouterModule.forRoot(routes);
