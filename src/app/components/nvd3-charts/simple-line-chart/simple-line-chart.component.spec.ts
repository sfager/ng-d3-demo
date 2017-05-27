import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nvd3SimpleLineChartComponent } from './simple-line-chart.component';

describe('Nvd3SimpleLineChartComponent', () => {
  let component: Nvd3SimpleLineChartComponent;
  let fixture: ComponentFixture<Nvd3SimpleLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nvd3SimpleLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvd3SimpleLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
