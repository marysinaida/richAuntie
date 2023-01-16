import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { GetAQuoteComponent } from './components/cart/get-a-quote/get-a-quote.component';
import { ProductListingComponent } from './components/marketplace/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/marketplace/product-details/product-details.component';
import { TransactionHistoryComponent } from './components/transactions/transaction-history/transaction-history.component';
import { TransactionStatusComponent } from './components/transactions/transaction-status/transaction-status.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { HeaderComponent } from './commom/header/header.component';
import { FooterComponent } from './commom/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetAQuoteComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    TransactionHistoryComponent,
    TransactionStatusComponent,
    HomeComponent,
    ShopComponent,
    ScrollTopComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

