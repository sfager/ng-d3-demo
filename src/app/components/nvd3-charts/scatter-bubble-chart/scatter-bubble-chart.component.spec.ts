import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterBubbleChartComponent } from './scatter-bubble-chart.component';

describe('ScatterBubbleChartComponent', () => {
  let component: ScatterBubbleChartComponent;
  let fixture: ComponentFixture<ScatterBubbleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterBubbleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
