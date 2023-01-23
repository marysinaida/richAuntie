import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  
})
export class CartComponent {
Number(arg0: any): number {
throw new Error('Method not implemented.');
}
  quantity = 1;
  product: any;

  constructor(private productService: ProductService, private cartService: CartService) {}

  allProducts = this.productService.getProducts();

  removeFromCart(product: Product, quantity: number) {
    console.log(product)
    this.cartService.removeFromCart(product,quantity);
}
}



  

  
  















