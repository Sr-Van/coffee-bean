import { Component, inject } from '@angular/core';

import { CoffeeService } from '../../services/coffee.service';
import { Coffes } from '../../interfaces/coffes';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  isModalOpen: boolean = false

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
      addres: [null, Validators.required],
      aditional: [null, Validators.required],
      contact: [null, Validators.required],
      payment: [null, Validators.required]
    })
    this.cartCoffeList = this.coffeServ.coffeeCart
    this.totalPrice = this.coffeServ.getTotalCoffePrice()
  }

  closeModal(event: any) {
    if (event.target.dataset.js === 'overlay') {
      this.isModalOpen = false
      return
    }
  }

  confirmOrder() {
    if(this.address.status === "VALID") {
      this.isModalOpen = true
    }

  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }


}
