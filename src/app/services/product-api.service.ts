import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';  // URL to web api

  constructor(private http: HttpClient) { }

  private products: Product[] = [
    {
      name: 'JIK',
      id: 1,
      price: 30,
      description: 'cloth bleach',
      imageUrl: 'washing_powder.jpg'
    },
    {
      name: 'Washing-powder',
      id: 2,
      price: 50,
      description: 'washing detergent',
      imageUrl: 'washing_powder.jpg'
    }, 
    {
      name: 'brush',
      id: 2,
      price: 30,
      description: 'cloth bleach',
      imageUrl: 'washing_powder.jpg'
    }, 
    {
      name: 'broom',
      id: 1,
      price: 30,
      description: 'cloth bleach',
      imageUrl: 'washing_powder.jpg'
    }
  ];

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(item => item.id !== product.id);
  }

  updateProduct(product: Product) {
    let productItem = this.products.find(item => item.id === product.id);
    if (productItem) {
      productItem = product;
    }
  }

  getProducts() {
    return this.products;
  }
}
