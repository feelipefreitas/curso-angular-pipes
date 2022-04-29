import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CityPipe } from './pipes/city.pipe';
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityPipe,
    StatusPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
