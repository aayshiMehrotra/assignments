import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLogNewComponent } from './timer-log-new.component';

describe('TimerLogNewComponent', () => {
  let component: TimerLogNewComponent;
  let fixture: ComponentFixture<TimerLogNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerLogNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
