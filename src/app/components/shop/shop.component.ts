import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products = [
    {name: 'Product 1', description: 'This is product 1'},
    {name: 'Product 2', description: 'This is product 2'},
    {name: 'Product 3', description: 'This is product 3'}
  ];

  addToCart(product: { name: any; }) {
    console.log(`${product.name} has been added to the cart.`);
  }
}




  

  