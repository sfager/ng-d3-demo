import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nvd3ScatterBubbleChartComponent } from './scatter-bubble-chart.component';

describe('ScatterBubbleChartComponent', () => {
  let component: Nvd3ScatterBubbleChartComponent;
  let fixture: ComponentFixture<Nvd3ScatterBubbleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nvd3ScatterBubbleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvd3ScatterBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
