import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {
  form: FormGroup;
  public formInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private api: ApiService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game';

    this.form = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      type: ['', Validators.required],
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
        const name = this.form.get('name')?.value;
        const code = this.form.get('code')?.value;
        const type = this.form.get('type')?.value;
        const description = this.form.get('description')?.value;

        this.api.addMedicine({
          name: name,
          code: code,
          type: type,
          description: description
        }).subscribe((response : any) => {

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
