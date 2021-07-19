export default class CartItem {
  constructor(product) {
    this.cnt = 1;
    this.product = product;   // TODO: decide to use copy or ref 
  }
};