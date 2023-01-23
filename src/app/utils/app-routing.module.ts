import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAQuoteComponent } from '../components/get-a-quote/get-a-quote.component';
import { HomeComponent } from '../components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'home', component: HomeComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'quote', component: GetAQuoteComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routing = RouterModule.forRoot(routes);
