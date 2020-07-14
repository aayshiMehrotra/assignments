import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTwoComponent } from './assignment-two.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService} from '../services/http.service';
import { of} from 'rxjs';
import { SharedModule } from '../shared.module';
describe('AssignmentTwoComponent', () => {
  let component: AssignmentTwoComponent;
  let fixture: ComponentFixture<AssignmentTwoComponent>;
  let http: HttpService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule
      ],
      declarations: [ AssignmentTwoComponent ],
      providers: [
        HttpService
      ]
    })
    .compileComponents();
    http = TestBed.get(HttpService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let spy = spyOn(http, 'getProducts').and.returnValue(of({
      products: [{
        "name":"Product 1",
        "price":"100"
     },
     {
        "name":"Product 2",
        "price":"300"
     },
     {
        "name":"Product 3",
        "price":"3000"
     }]
    }))
    expect(component).toBeTruthy();
  });
});
