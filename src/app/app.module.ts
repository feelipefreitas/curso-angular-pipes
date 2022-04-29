import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CityPipe } from './pipes/city.pipe';
import { StatusPipe } from './pipes/status.pipe';

import { HttpClientModule } from '@angular/common/http';
import { PostTitlePipe } from './pipes/post-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityPipe,
    StatusPipe,
    PostTitlePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
