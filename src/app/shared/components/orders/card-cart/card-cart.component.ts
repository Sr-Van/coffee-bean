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

  ngOnInit() {
    this.source = `../../../../assets/images/${this.item.name}.jpg`
  }

  increaseQuant(item: any) {
    this.coffServ.cartEvent.emit()
    this.coffServ.increaseQuantity(item)
  }

  decreaseQuant(item: any) {
    this.coffServ.cartEvent.emit()
    this.coffServ.decreaseQuantity(item)
  }

  removeItem(item: any) {
    this.coffServ.cartEvent.emit()
    this.coffServ.removeItem(item)
  }
}
