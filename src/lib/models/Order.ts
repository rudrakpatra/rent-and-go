import type { User, Customer } from "./Actors";
import type Vehicle from "./Vehicle";

export class Order {
  vehicle: Vehicle;
  customer: Customer;
  rentStartTime: Date;
  estimatedRentEndTime: Date;
  estimatedCost: number;
  milemeterStart: number;
  milemeterEnd: number;
  constructor(c: Customer, v: Vehicle) {
    this.customer = c;
    this.vehicle = v;
    this.rentStartTime = new Date();
    this.estimatedRentEndTime = new Date();
  }
  estimateCost() {
    var difference = getDateDifference(
      this.estimatedRentEndTime,
      this.rentStartTime
    );
    this.estimatedCost = this.vehicle.model.advancedPayment * difference;
  }
}
export class CompleteOrder extends Order {
  cost: number;
  rentEndTime: Date;
  constructor(c: Customer, v: Vehicle, rentEndTime: Date) {
    super(c, v);
    this.rentEndTime = rentEndTime;
    this.calcCost();
  }
  calcCost() {
    var difference = getDateDifference(
      this.estimatedRentEndTime,
      this.rentStartTime
    );
    this.cost = this.vehicle.model.advancedPayment * difference;
  }
}

/**
 *
 * @param d1
 * @param d2
 * @returns d1-d2
 */
function getDateDifference(d1: Date, d2: Date) {
  return d1.getTime() - d2.getTime();
}
