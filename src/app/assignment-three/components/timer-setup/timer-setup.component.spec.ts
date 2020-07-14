import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSetupComponent } from './timer-setup.component';
import {NgForm, FormsModule} from '@angular/forms'
describe('TimerSetupComponent', () => {
  let component: TimerSetupComponent;
  let fixture: ComponentFixture<TimerSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerSetupComponent ],
      imports: [FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
