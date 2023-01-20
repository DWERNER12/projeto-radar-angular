import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsDemoComponent } from './google-maps-demo.component';

describe('GoogleMapsDemoComponent', () => {
  let component: GoogleMapsDemoComponent;
  let fixture: ComponentFixture<GoogleMapsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapsDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMapsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
