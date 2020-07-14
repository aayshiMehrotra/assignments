import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerNewComponent } from './timer-new.component';

describe('TimerNewComponent', () => {
  let component: TimerNewComponent;
  let fixture: ComponentFixture<TimerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
