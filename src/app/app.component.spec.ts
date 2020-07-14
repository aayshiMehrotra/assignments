import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router } from "@angular/router";
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let router: Router;
  let fixture;
  let app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should add d-none class if routes constain assignment'`, () => {
    router.navigate(["assigmentone"]).then( () => {
      expect(fixture.debugElement.nativeElement.querySelector('.d-none')).toEqual(1);
      expect(fixture.debugElement.nativeElement.querySelector('.routing-nav')).toEqual(1);
    })
   
    
  });
  it(`should not add d-none class if routes constain assignment'`, () => {
    router.navigate([""]).then( () => {
      expect(fixture.debugElement.nativeElement.querySelector('.d-none')).toEqual(null);

      expect(fixture.debugElement.nativeElement.querySelector('.routing-nav')).toEqual(null);
    })
   
    
  });

});
