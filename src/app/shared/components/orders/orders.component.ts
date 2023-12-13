import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../../services/coffee.service';
import { Coffes } from '../../interfaces/coffes';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  coffeServ = inject(CoffeeService)

  cartCoffeList: Coffes[]

  ngOnInit() {
    this.cartCoffeList = this.coffeServ.coffeeCart
  }

}
