import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
