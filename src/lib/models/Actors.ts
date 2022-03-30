import axios from "axios";

import type { Order, CompleteOrder } from "./Order";

export class User {
  username: string;
  password: string;
  constructor() {
    this.username = "";
    this.password = "";
  }
  /**
   * Requests the database to get a user with the given name and password and tries to get the id of the user
   * @returns id of the customer
   */
  validate() {
    // HTTP REQUEST USING AXIOS
    // axios
    //   .post("/customers/", {
    //     username: this.name,
    //     password: this.password,
    //   })
    //   .then(function (response) {
    //     console.log(response);//+ve response should give a customer JSON
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     return;
    //   });

    //placeholder
    if (this.username == "rp" && this.password == "123") {
      let c = new Customer();
      c.accountName = "rudrak patra";
      return c;
    }
  }
}

export class Customer extends User {
  accountName: string;
  balance: number;
  completeOrders: CompleteOrder[];
  orders: Order[];
  constructor() {
    super();
    this.orders = [];
    this.completeOrders = [];
    this.accountName = "example name";
    this.balance = 0;
  }
  addCompleteOrder(order: CompleteOrder) {
    this.completeOrders.push(order);
    this.balance -= order.cost;
  }
  addOrder(order: Order) {
    this.orders.push(order);
    this.balance -= order.estimatedCost;
  }
  deleteAccount() {
    if (this.balance > 0) {
      alert(`your balance of ${this.balance} will be refunded soon`);
    } else if (this.balance < 0) {
      alert(
        `you have a dept of ${-this
          .balance} you must pay it before deleting your account`
      );
    }
  }
}
