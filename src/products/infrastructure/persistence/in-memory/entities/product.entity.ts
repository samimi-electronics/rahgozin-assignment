import BigNumber from 'bignumber.js';

export class ProductEntity {
  id: string;
  name: string;
  inventory: number;
  price: BigNumber;
}
