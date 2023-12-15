import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from 'src/app/shared/services/coffee.service';

@Component({
  selector: 'app-card-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-cart.component.html',
  styleUrl: './card-cart.component.css'
})
export class CardCartComponent {

  coffServ = inject(CoffeeService)

  @Input('item') item: any
  source: string
  quantity: number = 1

  ngOnInit() {
    this.source = `../../../../assets/images/${this.item.name}.jpg`
  }

  increaseQuant() {
    if(this.quantity >= 10) {
      return
    }
    this.quantity++
  }

  decreaseQuant() {
    if(this.quantity <= 1) {
      return
    }
    this.quantity--
  }

  removeItem(item: any) {
    this.coffServ.removeItem(item)
  }
}
