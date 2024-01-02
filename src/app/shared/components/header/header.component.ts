import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <nav class="navbar" #menu data-menu="closed">
      <h1 class="brand" routerLink="/">Coffee Bean</h1>
      <ul class="links">
        <input class="checkbox" type="checkbox" (click)="toggleMenu(menu)" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <li (click)="scrollTo('home')">Home</li>
        <li (click)="scrollTo('shop')">Shop</li>
        <li (click)="scrollTo('about')">About us</li>
        <li class="button">
          <a class="order-btn" routerLink="order">Order Now</a>
        </li>
      </ul>
    </nav>
      `,
  styleUrl: 'header.component.css',
  imports: [RouterModule]
})
export class HeaderComponent {

  activedRoute = inject(ActivatedRoute)

  ngOnInit() {
    console.log(this.activedRoute.snapshot.paramMap.get(''));

  }

  toggleMenu(menu: any) {

    if (menu.dataset.menu === 'closed') {

      menu.dataset.menu = 'open'
      return
    }

    menu.dataset.menu = 'closed'

  }

  scrollTo(el: any) {
    (document.getElementById(el) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  }

}
