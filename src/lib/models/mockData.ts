import { Customer } from "./Actors";
import Vehicle, { Model } from "./Vehicle";
import { Order } from "./Order";

export var Honda = new Model();
Honda.name = "Honda";
Honda.perHourCharge = 400;
Honda.perKmCharge = 250;
Honda.advancedPayment = 500;
Honda.imgSrc = "/vehicles/honda.jpg";

export var TataSumo = new Model();
TataSumo.name = "Tata Sumo";
TataSumo.perHourCharge = 400;
TataSumo.perKmCharge = 250;
TataSumo.advancedPayment = 500;
TataSumo.imgSrc = "/vehicles/tatasumo.jpg";
/**
 *
 *
 */
export var honda1 = new Vehicle(Honda, 0);
honda1.costPrice = 750000;
honda1.hasAC = true;
export var honda2 = new Vehicle(Honda, 1);
honda2.costPrice = 750030.0;
honda2.hasAC = true;
export var honda3 = new Vehicle(Honda, 2);
honda3.costPrice = 750070.0;

export var honda4 = new Vehicle(Honda, 3);
honda4.costPrice = 759000.0;
honda4.hasAC = true;

/**
 *
 *
 *
 */
export var sumo1 = new Vehicle(TataSumo, 4);
sumo1.costPrice = 500000.0;

export var sumo2 = new Vehicle(TataSumo, 5);
sumo2.costPrice = 800000.0;
export var sumo3 = new Vehicle(TataSumo, 6);
sumo3.hasAC = false;
sumo3.costPrice = 400000.0;

export var sumo4 = new Vehicle(TataSumo, 7);
sumo4.hasAC = true;
sumo4.costPrice = 600000;
/**
 *
 *
 *
 *
 */
export var vehiclesList = [
  sumo1,
  sumo2,
  honda1,
  honda2,
  honda3,
  sumo3,
  sumo4,
  honda4,
];

/**
 *
 *
 *
 *
 *
 */
export var c1 = new Customer();
c1.username = "rudrakpatra";
c1.password = "1234";

c1.accountName = "Rudrak";
c1.balance = 100;

export var o1 = new Order(c1, sumo1);
export var o2 = new Order(c1, sumo4);
export var o3 = new Order(c1, sumo4);
export var o4 = new Order(c1, honda4);

c1.addOrder(o1);
c1.addOrder(o2);
c1.addOrder(o3);
c1.addOrder(o4);
