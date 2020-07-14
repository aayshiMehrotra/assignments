import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerAnalysisNewComponent } from './timer-analysis-new.component';

describe('TimerAnalysisNewComponent', () => {
  let component: TimerAnalysisNewComponent;
  let fixture: ComponentFixture<TimerAnalysisNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerAnalysisNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerAnalysisNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
