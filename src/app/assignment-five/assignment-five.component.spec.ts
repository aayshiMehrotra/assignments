import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFiveComponent } from './assignment-five.component';

import { of} from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpService} from '../services/http.service';
import { SharedModule } from '../shared.module';
describe('AssignmentFiveComponent', () => {
  let component: AssignmentFiveComponent;
  let fixture: ComponentFixture<AssignmentFiveComponent>;
  let http: HttpService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule
      ],
      declarations: [ AssignmentFiveComponent ],
      providers: [
        HttpService,
        
      ]
    }).compileComponents();
    http = TestBed.get(HttpService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let spy = spyOn(http, 'getStudentsData').and.returnValue(of({
      students: [{
        "name":"ABC",
        "class":"3",
        "section":"D",
        "sub1":"23",
        "sub2":"54",
        "sub3":"65"
     },
     {
        "name":"CDE",
        "class":"3",
        "section":"E",
        "sub1":"23",
        "sub2":"45",
        "sub3":"67"
     }]
    }))
    expect(component).toBeTruthy();
  });
});
