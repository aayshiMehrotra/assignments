import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimerSetupNewComponent } from './timer-setup-new.component';
import { FormsModule } from '@angular/forms';
describe('TimerSetupNewComponent', () => {
  let component: TimerSetupNewComponent;
  let fixture: ComponentFixture<TimerSetupNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule ],
      declarations: [ TimerSetupNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSetupNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
