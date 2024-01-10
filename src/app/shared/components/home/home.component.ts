import { Component, inject } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { Coffes } from '../../interfaces/coffes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  coffee = inject(CoffeeService)

  coffeeList: Coffes[] = []
  aboutList: any[] = []

  ngOnInit() {
    this.aboutList = this.coffee.getAboutList()
    this.coffeeList = this.coffee.getCoffeeList()
  }
}
