import { Component, inject } from '@angular/core';
import { Coffes } from './shared/interfaces/coffes';
import { CoffeeService } from './shared/services/coffee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffeBean';
}
