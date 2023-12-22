import { Component, inject } from '@angular/core';

import { CoffeeService } from '../../services/coffee.service';
import { Coffes } from '../../interfaces/coffes';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  address: FormGroup
  formulario = inject(FormBuilder)

  constructor() {
    this.subs = this.coffeServ.cartEvent.subscribe(() => {

      setTimeout(() => {
        this.totalPrice = this.coffeServ.getTotalCoffePrice()
      }, 500);
    })

  }

  ngOnInit() {
    this.address = this.formulario.group({
      addres: [null],
      aditional: [null],
      contact: [null],
      payment: [null]
    })
    this.cartCoffeList = this.coffeServ.coffeeCart
    this.totalPrice = this.coffeServ.getTotalCoffePrice()
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  show() {
    console.log(this.address)
  }

}
