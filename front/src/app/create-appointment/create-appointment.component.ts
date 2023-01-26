import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {

  user: any;
  form: UntypedFormGroup;
  appointment: any;
  constructor(private router: Router, private fb: UntypedFormBuilder, private api: ApiService) 
    {
      this.form = this.fb.group({
        date: [''],
        duration: ['',[Validators.required,Validators.min(1),Validators.max(120)]],
      });

      const userString = localStorage.getItem('user');
      if(userString == null) {
        this.router.navigate(['/login'], {queryParams: { login: 'false' } });
      }
    
      this.user = JSON.parse((userString) || '{}');
     }

  ngOnInit(): void {
  }

    onSubmit()  {
      const date = this.form.get('date')?.value;
      const duration = this.form.get('duration')?.value;
      this.api.createAppointment({
        date: date,
        duration: duration,
        adminOfCenterId: this.user.id
      }).subscribe((response : any) => {
      });
}
}

