import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.scss']
})
export class AddConsultationComponent implements OnInit {
  form: FormGroup;
  public formInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  pharmacists: any;
  selectedPharmacists: any;

  constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private api: ApiService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game';

    this.form = this.fb.group({
      date: ['', Validators.required],
      duration: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {

    this.api.getPharmacists().subscribe((response : any) => {
      this.pharmacists = response;
    })
  }

  async onSubmit(): Promise<void> {
    this.formInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const date = this.form.get('date')?.value;
        const duration = this.form.get('duration')?.value;
        const description = this.form.get('description')?.value;

        this.api.addConsultation({
          date: date,
          duration: duration,
          description: description,
          pharmacistsId: this.selectedPharmacists
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
