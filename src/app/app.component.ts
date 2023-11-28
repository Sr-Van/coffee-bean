import { Component, inject } from '@angular/core';
import { Coffes } from './shared/interfaces/coffes';
import { CoffeeService } from './shared/services/coffee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffeBean';

  coffee = inject(CoffeeService)
  subs: Subscription

  coffeeList: Coffes[] = []

  ngOnInit() {
    this.coffeeList = this.coffee.getCoffeeList()
    console.log(this.coffeeList)
  }
}
