import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <nav class="navbar" #menu data-menu="closed">
      <h1 class="brand" routerLink="/">Coffee Bean</h1>
      <ul class="links">
        <input [checked]="accepted" class="checkbox" type="checkbox" (click)="toggleMenu(menu)" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <li (click)="scrollTo('home', menu)">Home</li>
        <li (click)="scrollTo('shop', menu)">Shop</li>
        <li (click)="scrollTo('about', menu)">About us</li>
        <li class="button">
          <a class="order-btn" routerLink="order" (click)="goToOrder(menu)">Order Now</a>
        </li>
      </ul>
    </nav>
      `,
  styleUrl: 'header.component.css',
  imports: [RouterModule]
})
export class HeaderComponent {

  activedRoute = inject(ActivatedRoute)
  router = inject(Router)

  accepted: boolean = false

  goToOrder(menu: any) {
    this.toggleMenu(menu)
    this.accepted = false
  }

  toggleMenu(menu: any) {

    if (menu.dataset.menu === 'closed') {
      this.accepted = true
      menu.dataset.menu = 'open'
      return
    }
    this.accepted = false
    menu.dataset.menu = 'closed'

  }

  scrollTo(el: any, menu: any) {
    if(this.router.url !== '/') {

      this.router.navigate(['/'])
      setTimeout(()=>{
        (document.getElementById(el) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        this.toggleMenu(menu)
      }, 800)
      return
    }
    (document.getElementById(el) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    setTimeout(() => {
      this.toggleMenu(menu)
    }, 200);

  }

}
