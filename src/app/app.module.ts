import {HomeComponent} from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { PathNotFoundComponent } from 'app/components/_404.component';
import {
  Nvd3StackedAreaChartComponent,
  Nvd3SimpleLineChartComponent,
  Nvd3ScatterBubbleChartComponent
} from './components/nvd3-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PathNotFoundComponent,
    Nvd3StackedAreaChartComponent,
    Nvd3SimpleLineChartComponent,
    Nvd3ScatterBubbleChartComponent
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
