import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueCarComponent } from './blue-car.component';

describe('BlueCarComponent', () => {
  let component: BlueCarComponent;
  let fixture: ComponentFixture<BlueCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
