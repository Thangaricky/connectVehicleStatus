import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleService } from '../assets/service/vehicle.service';
import { MessageService } from '../assets/service/message.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    VehicleService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
