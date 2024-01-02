import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="main">
      <div class="content">
        <h2>We received your order, thanks!</h2>
        <span>wait the confirmation to receive your sweet coffee.</span>
        <a [routerLink]="['']">back to home</a>
      </div>
  </div>
  `,
  styles: `
    .main {
      height: 100dvh;
      display: grid;
      place-items: center;
      font-family: 'Playfair Display', serif;
      text-align: center;
      color: #38220F;

    }

    .main .content {
      display: flex;
      flex-direction: column;

    }

    .main .content h2 {
      font-weight: bold;
    }

    .main .content span, a {
      font-size: 12px;
    }

    .main .content  a {
      margin-top: 10px;
      text-decoration: underline dotted;
    }
  `


})
export class ThanksComponent {

}
