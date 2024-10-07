import { Injectable } from '@nestjs/common';
import { Product } from '../product';
import { v4 } from 'uuid';
import BigNumber from 'bignumber.js';

@Injectable()
export class ProductFactory {
  create(name: string, inventory: number, price: string | number): Product {
    return new Product(v4(), name, inventory, BigNumber(price));
  }
}
