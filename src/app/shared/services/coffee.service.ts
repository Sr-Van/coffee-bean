import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }

  getCoffeeList() {
    return [
      {
        name: 'Cappuccino',
        coffeePerc: 50,
        milkPerc: 50,
        price: 8.50
      },
      {
        name: 'Chai Latte',
        coffeePerc: 30,
        milkPerc: 70,
        price: 12
      },
      {
        name: 'Macchiato',
        coffeePerc: 60,
        milkPerc: 40,
        price: 10
      },
      {
        name: 'Expresso',
        coffeePerc: 80,
        milkPerc: 20,
        price: 5
      },
    ]
  }
}
