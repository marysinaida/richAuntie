import { Component, } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product-api.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products: any;

  
  constructor(private productService: ProductService, private cartService: CartService) { }


  allProducts = this.productService.getProducts();

  addToCart(product: Product, quantity: number) {
    console.log(product)
    this.cartService.addProductToCart({
      product,
      quantity,
      buyerId: "1"
      
    });
  }

}













