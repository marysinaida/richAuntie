import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  constructor(private productService: ProductService) { }

  allProducts = this.productService.getProducts();

}
