import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateFormatterDirective } from './shared/directives/dateFormat.directive';
import { CurrencyBrlDirective } from './shared/directives/currency-brl.directive';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
// import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    DateFormatterDirective,
    CurrencyBrlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    // MatInputModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
