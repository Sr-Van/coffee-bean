import { EventEmitter, Injectable } from '@angular/core';
import { Coffes } from '../interfaces/coffes';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  coffeeCart: any[] = []
  cartEvent = new EventEmitter<any>

  constructor() {
    this.getCartList()
  }

  getCoffeeList() {
    return [
      {
        name: 'Cappuccino',
        coffeePerc: 50,
        milkPerc: 50,
        price: 8.50,
        quantity: 1
      },
      {
        name: 'Chai Latte',
        coffeePerc: 30,
        milkPerc: 70,
        price: 12,
        quantity: 1
      },
      {
        name: 'Macchiato',
        coffeePerc: 60,
        milkPerc: 40,
        price: 10,
        quantity: 1
      },
      {
        name: 'Expresso',
        coffeePerc: 80,
        milkPerc: 20,
        price: 5,
        quantity: 1
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

  filterCartList(item: any) {

    return this.coffeeCart.filter(coffee => coffee.name === item)[0]
  }

  removeItem(item: any) {

    const index = this.coffeeCart.map(coff => coff.name).indexOf(item)

    this.coffeeCart.splice(index, 1)
    this.setCoffeeCart()
  }

  addCoffeToCart(item: any) {
    if(this.filterCartList(item)) {
      this.removeItem(item)
      return
    }
    const coffeList = this.getCoffeeList()
    const itemToAdd = coffeList.filter(coff => coff.name == item )[0]

    this.coffeeCart.push(itemToAdd)
    this.setCoffeeCart()
  }

  setCoffeeCart() {
    localStorage.setItem("coffeeCart", JSON.stringify(this.coffeeCart))
  }

  getCartList() {

    if(localStorage['coffeeCart']) {
      this.coffeeCart = JSON.parse(localStorage.getItem('coffeeCart') || '')
      return
    }
    this.setCoffeeCart()
    return
  }

  getTotalCoffePrice() {
    return this.coffeeCart.reduce(
      (accumulator, {price, quantity}) =>
        accumulator + (parseFloat(price) * quantity), 0) || 0
  }

  increaseQuantity(item: any) {
    const coff = this.coffeeCart.filter(coffee => coffee.name === item)[0]

    if(coff.quantity >= 10) {
      return
    }

    coff.quantity++
    this.setCoffeeCart()

  }

  decreaseQuantity(item: any) {
    const coff = this.coffeeCart.filter(coffee => coffee.name === item)[0]

    if(coff.quantity <= 1) {
      return
    }

    coff.quantity--
    this.setCoffeeCart()

  }

  clearCart() {
    this.coffeeCart = []
    this.setCoffeeCart()
  }
}
