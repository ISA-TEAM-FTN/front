import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;
  public formInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;
  user: any

  constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private api: ApiService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

    const userJSON = localStorage.getItem('user')

    this.user = JSON.parse(userJSON == null ? "" : userJSON);

    this.form = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      address: [this.user.address, Validators.required],
      city: [this.user.city, Validators.required],
      country: [this.user.country, Validators.required],
      phone: [this.user.phone, Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {

  }

  async onSubmit(): Promise<void> {
    this.formInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const firstName = this.form.get('firstName')?.value;
        const lastName = this.form.get('lastName')?.value;
        const address = this.form.get('address')?.value;
        const city = this.form.get('city')?.value;
        const country = this.form.get('country')?.value;
        const phone = this.form.get('phone')?.value;

        this.api.updateProfile({
          firstName: firstName,
          lastName: lastName,
          address: address,
          city: city,
          country: country,
          phone: phone,
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
