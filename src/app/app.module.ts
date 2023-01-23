import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { GetAQuoteComponent } from './components/get-a-quote/get-a-quote.component';
import { ProductListingComponent } from './components/marketplace/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/marketplace/product-details/product-details.component';
import { TransactionHistoryComponent } from './components/transactions/transaction-history/transaction-history.component';
import { TransactionStatusComponent } from './components/transactions/transaction-status/transaction-status.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { HeaderComponent } from './commom/header/header.component';
import { FooterComponent } from './commom/footer/footer.component';
import { AppRoutingModule } from './utils/app-routing.module';
import { ProductComponent } from './components/product/product.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CartComponent } from './components/cart/cart.component';

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
    FooterComponent,
    ProductComponent,
    CartComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
