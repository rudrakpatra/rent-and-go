export const nightStayCharge = 150;
export class Model {
  name: string;
  perKmCharge: number;
  perHourCharge: number;
  advancedPayment: number;
  imgSrc: string;
  constructor() {
    this.name = "<model name>";
    this.perHourCharge = 0;
    this.perKmCharge = 0;
    this.imgSrc = "./";
    this.advancedPayment = 0;
  }
}
export default class Vehicle {
  id: number;
  name: string;
  model: Model;
  hasAC: boolean;
  costPrice: number;
  revenueEarned: number;
  fuelConsumption: number;
  mileMeter: number;
  constructor(m: Model, id: number) {
    this.id = id;
    this.name = m.name + this.id;
    this.costPrice = 0;
    this.fuelConsumption = 0;
    this.hasAC = false;
    this.mileMeter = 0;
    this.model = m;
    this.revenueEarned = 0;
  }
}
