import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [style]="color">
      <div class="card-icon">
        <img [src]="source" alt="icon">
      </div>
      <div class="card-text">
        <h2>{{ card.title }}</h2>
        <span>{{ card.text }}</span>
      </div>
    </div>
  `,
  styles: [`
    .card {
      height: 284px;
      width: 280px;

      background-color: rgb(255, 239, 215);
      color: #603809;

      font-family: 'Playfair Display', serif;

      border: 1px solid rgb(249, 193, 108, 0.42);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .card-icon {
      width: fit-content;
      height: 50%;
      display: flex;
      align-items: flex-end;
    }

    .card-icon img {
      width: 88px;
    }

    .card-text {
      height: 50%;
      text-align: center;
    }

    .card-text h2 {
      font-size: 28px;
    }

    .card-text span {
      display: block;
      width: 180px;
      font-size: 20px;
    }

    `
  ]
})
export class CardAboutComponent {

  @Input('card') card: any;
  @Input('index') index: any;

  color: string
  source: string

  ngOnInit() {
    this.source = `../../../../assets/images/icons/icon${this.index + 1}.svg`
    if (this.index === 0) {
      this.color = 'background-color: rgb(249, 193, 108, 0.42);'
    }
  }
}
