import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ConverterService} from './services/converter.service';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
