import { Component, inject } from '@angular/core';

import { CoffeeService } from '../../services/coffee.service';
import { Coffes } from '../../interfaces/coffes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  coffeServ = inject(CoffeeService)

  cartCoffeList: Coffes[]
  totalPrice: number
  subs: Subscription

  constructor() {
    this.subs = this.coffeServ.cartEvent.subscribe(() => {

      setTimeout(() => {
        this.totalPrice = this.coffeServ.getTotalCoffePrice()
      }, 500);
    })

  }

  ngOnInit() {
    this.cartCoffeList = this.coffeServ.coffeeCart
    this.totalPrice = this.coffeServ.getTotalCoffePrice()
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
