import {HomeComponent} from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { PathNotFoundComponent } from 'app/components/_404.component';
import { Nvd3StackedAreaChartComponent } from './components/nvd3-stacked-area-chart/nvd3-stacked-area-chart.component';
import { BlueCarComponent } from './components/blue-car/blue-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PathNotFoundComponent,
    Nvd3StackedAreaChartComponent,
    BlueCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
