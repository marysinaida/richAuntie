import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent {

  quantity = 1;
  product: any;

  constructor(private productService: ProductService, private cartService: CartService) {}

  allProducts = this.productService.getProducts();

  checkoutFromCart(product: Product, quantity: number) {
    console.log(product)
    this.cartService.checkoutFromCart(product,quantity);
}
}

