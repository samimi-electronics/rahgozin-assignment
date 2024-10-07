export class CreateProductCommand {
  constructor(
    public readonly name: string,
    public readonly inventory: number,
    public readonly price: number | string,
  ) {}
}
