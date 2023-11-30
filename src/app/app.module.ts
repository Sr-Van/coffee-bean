import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { CardComponent } from './shared/components/card/card.component';
import { CardAboutComponent } from './shared/components/card-about/card-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    CardAboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
