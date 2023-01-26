import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenyAppointmentComponent } from './deny-appointment.component';

describe('DenyAppointmentComponent', () => {
  let component: DenyAppointmentComponent;
  let fixture: ComponentFixture<DenyAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenyAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenyAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
