import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AddrationComponent } from './addration/addration.component';
import { UpdaterationComponent } from './updateration/updateration.component';
import { DisplayrationComponent } from './displayration/displayration.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { UpdateRevenueComponent } from './update-revenue/update-revenue.component';
import { FormsModule } from '@angular/forms';
import { RationstatewiseComponent } from './rationstatewise/rationstatewise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddrationComponent,
    UpdaterationComponent,
    DisplayrationComponent,
    DisplayallComponent,
    UpdateRevenueComponent,
    RationstatewiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
