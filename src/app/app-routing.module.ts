import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {Nvd3SimpleLineChartComponent, Nvd3StackedAreaChartComponent} from './components/nvd3-charts';
import { PathNotFoundComponent } from 'app/components/_404.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'simplelinechart', component: Nvd3SimpleLineChartComponent },
  { path: 'stackedareachart', component: Nvd3StackedAreaChartComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent];
