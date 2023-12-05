import { Injectable } from '@angular/core';
import { Coffes } from '../interfaces/coffes';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  coffeeCart: Coffes[]

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

  getAboutList() {
    return [
      {
        title: "Supreme Beans",
        text: "Beans that provides great taste"
      },
      {
        title: "High Quality",
        text: "We provide the highest quality"
      },
      {
        title: "Extraordinary",
        text: "Coffee like you have never tasted"
      },
      {
        title: "Affordable Price",
        text: "Our Coffee prices are easy to afford"
      }

    ]
  }





  getCartList() {
    if(localStorage['coffeeCart']) {
      this.coffeeCart = JSON.parse(localStorage.getItem('coffeeCart') || '')
      return
    }
    return
  }
}
