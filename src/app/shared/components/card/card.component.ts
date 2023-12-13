import { Component, Input, inject } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-card',
  template: `
  <div class="card">
    <div class="card-content">
      <div class="card-img">
        <img [src]="source" alt="">
      </div>
      <div class="card-text">
        <span>{{ card.name }}</span>
        <div class="percentage">
          <p>Coffee {{ card.coffeePerc }}%</p>
          |
          <p>Milk {{ card.milkPerc }}%</p>
        </div>
        <span>{{ card.price | currency}}</span>
      </div>
    </div>

    <button class="button order-btn" [attr.data-item]="dataIndex" (click)="toggleCart(dataIndex)" >{{ buttonText }}</button>
  </div>
`,
  styles: [`
  .card {
    width: 280px;
    height: 365px;

    background-color: rgb(255, 239, 215);
    color: #603809;

    position: relative;
    font-family: 'Playfair Display', serif;

    border: 1px solid rgb(249, 193, 108, 0.42);
  }

  .card img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;

  }

  .card-content {
    height: 100%;
  }

  .card-text {
    display: grid;
    place-items: center;

    margin-top: 14px;

  }

  .card-text span:nth-child(1) {
    font-size: 22px;
    font-weight: bold;
  }
  .card-text span:nth-child(3) {
    font-size: 18px;
    font-weight: bold;
  }

  .card-text .percentage {
    display: flex;
    gap: 1rem;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-color: #967259;
    color: #fff;
    height: 51px;
    width: 135px;
    border-radius: 32px;

    border: none;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);

    font-family: 'Playfair Display', serif;

    transition: background-color 700ms ease;
  }

  .button:hover {
    background-color: #847266;
  }

  .card-img {
    width: 100%;
    height: 65%;
    overflow: hidden;
}
`]
})
export class CardComponent {
  coffeeServ = inject(CoffeeService)

  @Input('card') card: any

  source: string
  dataIndex: any
  buttonText: string

  ngOnInit() {
    this.source = `../../../../assets/images/${this.card.name}.jpg`
    this.dataIndex = this.card.name
    this.checkButton()
  }

  toggleCart(item: any) {
    this.coffeeServ.addCoffeToCart(item)
    this.checkButton()
  }

  checkButton() {
    if(this.coffeeServ.filterCartList(this.card.name)) {
      this.buttonText = 'Ordered'
      return
    }
    this.buttonText = 'Order Now'
  }

}
