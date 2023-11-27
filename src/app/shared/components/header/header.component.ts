import { Component } from '@angular/core';

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
          <a href="#" class="order-btn">Order Now</a>
        </li>
      </ul>
    </nav>
      `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
