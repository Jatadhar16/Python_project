import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalmanageComponent } from './hospitalmanage.component';

describe('HospitalmanageComponent', () => {
  let component: HospitalmanageComponent;
  let fixture: ComponentFixture<HospitalmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalmanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
