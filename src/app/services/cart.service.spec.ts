import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

@Component({
  selector: 'app-product',
  template: `
    <button (click)="addToCart(product)">Add to Cart</button>
  `
})
export class ProductComponent {
  product = { id: 1, name: 'Product 1', price: 9.99 };

  constructor(private cartService: CartService) {}

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}

