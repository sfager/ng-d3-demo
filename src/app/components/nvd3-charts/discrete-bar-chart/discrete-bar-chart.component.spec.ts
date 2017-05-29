import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nvd3DiscreteBarChartComponent } from './discrete-bar-chart.component';

describe('DiscreteBarChartComponent', () => {
  let component: Nvd3DiscreteBarChartComponent;
  let fixture: ComponentFixture<Nvd3DiscreteBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nvd3DiscreteBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvd3DiscreteBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
