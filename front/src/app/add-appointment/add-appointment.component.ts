import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {
  form: UntypedFormGroup;
  public formInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  doctors: any;
  selectedDoctor: any;
  user: any;

  constructor(
      private fb: UntypedFormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private api: ApiService
  ) {
    
    const userString = localStorage.getItem('user');
    if(userString == null) {
      this.router.navigate(['/login'], {queryParams: { login: 'false' } });
    }
  
    this.user = JSON.parse((userString) || '{}');
  
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game';

    this.form = this.fb.group({
      date: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
  }

  async onSubmit(): Promise<void> {
    this.formInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const date = this.form.get('date')?.value;
        const duration = this.form.get('duration')?.value;
        const description = this.form.get('description')?.value;

        this.api.addAppointment({
          date: date,
          duration: duration,
          description: description,
          doctorId: this.selectedDoctor
        }).subscribe((response : any) => {

          this.router.navigate(['/'])
        }, () => {
          this.router.navigate(['/'])
        });


      } catch (err) {
        this.formInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
