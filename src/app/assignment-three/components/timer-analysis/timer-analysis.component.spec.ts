import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerAnalysisComponent } from './timer-analysis.component';

describe('TimerAnalysisComponent', () => {
  let component: TimerAnalysisComponent;
  let fixture: ComponentFixture<TimerAnalysisComponent>;
  let timerInfo = {
    "clicksTimeStamp": [],
    "startClicks": 2,
    "pauseClicks": 3,
    "clicksTimerValues": [],
    "timerValue": 20
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerAnalysisComponent);
    component = fixture.componentInstance;
    component.timerInfo = timerInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
