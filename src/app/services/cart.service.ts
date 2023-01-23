import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartService: any;
  removeFromCart(product: Product, quantity: number) {
    this.cartService.removeFromCart(product, quantity);
}

  private cart: Cart[] = [];


  addProductToCart(cart: Cart) {
    this.cart.push({
      product: cart.product,
      quantity: cart.quantity,
      buyerId: cart.buyerId,
      
    });
  }

  removeProductFromCart(product: Product) {
    this.cart = this.cart.filter(item => item.product.id !== product.id);
  }

  updateProductInCart(product: Product, quantity: number) {
    let cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity = quantity;
    }
  }

  getCartItems() {
    return this.cart;
  }
}
