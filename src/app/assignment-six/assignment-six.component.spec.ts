import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSixComponent } from './assignment-six.component';

describe('AssignmentSixComponent', () => {
  let component: AssignmentSixComponent;
  let fixture: ComponentFixture<AssignmentSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
