import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nvd3StackedAreaChartComponent } from './nvd3-stacked-area-chart.component';

describe('Nvd3StackedAreaChartComponent', () => {
  let component: Nvd3StackedAreaChartComponent;
  let fixture: ComponentFixture<Nvd3StackedAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nvd3StackedAreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvd3StackedAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
