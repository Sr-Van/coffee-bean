import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <nav class="navbar">
      <h1 class="brand">Coffee Bean</h1>
      <ul class="links">
        <li>Home</li>
        <li>Contact</li>
        <li>About us</li>
        <li class="button">
          <a class="order-btn" routerLink="order">Order Now</a>
        </li>
      </ul>
    </nav>
      `,
  styles: [`
    .navbar {
      height: 90px;
      width: 100%;
      color: #fff;
      background-color: rgb(56, 34, 15, 0.6);

      display: flex;
      padding: 0 60px;
      align-items: center;
      justify-content: space-between;

      overflow: hidden;
      position: fixed;
      top: 0;
      z-index: 999;
    }

    .brand {
      font-size: 32px;
      font-family: 'Clicker Script', cursive;
      cursor: pointer;
    }

    .links {
      font-family: 'Playfair Display', serif;
      display: flex;
      list-style: none;
      align-items: center;
      font-size: 20px;

      gap: 2rem;
      cursor: pointer;
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #967259;
      height: 51px;
      width: 135px;
      border-radius: 32px;
    }

    .order-btn  {
      text-decoration: none;
      color: #fff;
    }`
],
  imports: [RouterModule]
})
export class HeaderComponent {

}
