export default class Order {
  constructor(items) {
    this.date = Date.now();
    this.items = items;
  }
};