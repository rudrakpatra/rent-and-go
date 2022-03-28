export default class Vehicle {
  id?: number;
  model: string;
  cost: number;
  perHourCharge: number;
  perKmCharge: number;
  constructor() {
    this.model = "model100xx.kk";
    this.cost = 10;
    this.id = 10;
    this.perHourCharge = 500;
    this.perKmCharge = 200;
  }
}
