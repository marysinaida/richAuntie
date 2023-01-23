import { Product } from "./product.model";

export interface Cart{
    product: Product,
    quantity: number,
    buyerId: string,
}