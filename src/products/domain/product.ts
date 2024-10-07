import BigNumber from 'bignumber.js';

export class Product {
  constructor(
    public id: string,
    public name: string,
    public inventory: number,
    public price: BigNumber,
  ) {}
}
