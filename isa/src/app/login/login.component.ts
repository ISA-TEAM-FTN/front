import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any; 


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {

    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {

  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const email = this.form.get('email')?.value;
        const password = this.form.get('password')?.value;
        console.log("dskak")
        this.apiService.login({
          email: email,
          password: password
        }
        ).subscribe((response : any) => {
          console.log("dsadas")
          let token = response.token;
          localStorage.setItem("token", token);
          this.apiService.getCurrentUser().subscribe((response : any) => {
            let user = response;
            console.log("")
            localStorage.setItem('user', JSON.stringify(user));
            this.navigate()
          })
        },(error:any) => {
          console.log(error)
          this.errorMessage = error.error;
        })

      }
       catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

  navigate()
  {
    const userString = localStorage.getItem('user');
    if(!userString)
    {
      return;
    }
    const user = JSON.parse((userString));
    if(user.userType == 0)
    {
      this.router.navigate(['/users']);
    }

    else if(user.userType == 1)
    {
      this.router.navigate(['/patient']);
    }

    else if(user.userType == 3)
    {
      this.router.navigate(['/doctorPage']);

    }

  }
}