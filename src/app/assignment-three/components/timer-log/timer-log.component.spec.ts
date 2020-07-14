import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLogComponent } from './timer-log.component';

describe('TimerLogComponent', () => {
  let component: TimerLogComponent;
  let fixture: ComponentFixture<TimerLogComponent>;
  let timerInfo = {
    "clicksTimeStamp": [],
    "startClicks": 2,
    "pauseClicks": 3,
    "clicksTimerValues": [],
    "timerValue": 20
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLogComponent);
    component = fixture.componentInstance;
    component.timerInfo = timerInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
