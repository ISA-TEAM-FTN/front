import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-center-account',
  templateUrl: './center-account.component.html',
  styleUrls: ['./center-account.component.scss']
})
export class CenterAccountComponent implements OnInit {

  user:any;
  form: FormGroup;
  centeraccount: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api:ApiService

  )
  {
    
    this.form = this.fb.group({
      name: [''],
      address: [''],
      description: [''],
    });

    const userString = localStorage.getItem('user');
    if(userString == null) {
      this.router.navigate(['/login'], {queryParams: { login: 'false' } });
    }
  
    this.user = JSON.parse((userString) || '{}');
 
  }

 

  

  async ngOnInit():  Promise<void>  {
    
    this.centeraccount = []    
    this.api.getCenterAccount().subscribe((response : any) => {
      this.centeraccount = response;
      
      this.form.patchValue({
        name: this.centeraccount.name,
        address: this.centeraccount.address,
        description: this.centeraccount.description
        
     });  
    })
  }

  async onSubmit(): Promise<void> {
  
        const name = this.form.get('name')?.value;
        const address = this.form.get('address')?.value;
        const description = this.form.get('description')?.value;
        this.api.updateCenterAccount({
          name: name,
          address: address,
          description: description,
          
        }).subscribe((response : any) => {
          this.ngOnInit()

        });


    
  }


}
