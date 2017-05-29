import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PathNotFoundComponent } from './components/_404.component';
import {
  Nvd3SimpleLineChartComponent,
  Nvd3ScatterBubbleChartComponent,
  Nvd3StackedAreaChartComponent,
  Nvd3DiscreteBarChartComponent
} from './components/nvd3-charts';

import { AppRoutingModule } from './app-routing.module'

describe('AppComponent', () => {
  const mockRouter = { };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        PathNotFoundComponent,
        Nvd3StackedAreaChartComponent,
        Nvd3SimpleLineChartComponent,
        Nvd3ScatterBubbleChartComponent,
        Nvd3DiscreteBarChartComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render navbar with brand with "Ng-d3 Demo" text', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.navbar-brand').textContent).toContain('Ng-d3 Demo');
  }));
});
