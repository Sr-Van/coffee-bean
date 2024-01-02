import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './shared/components/orders/orders.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ThanksComponent } from './shared/components/thanks/thanks.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'order', component: OrdersComponent},
  {path: 'thanks', component: ThanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
