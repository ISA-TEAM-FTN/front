import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-center-account',
  templateUrl: './center-account.component.html',
  styleUrls: ['./center-account.component.scss']
})
export class CenterAccountComponent implements OnInit {
  @ViewChild("search", { static: false }) searchElementRef: ElementRef; 
  public searchControl: FormControl;

  zoom: number = 18;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  
  user:any;
  form: FormGroup;
  centeraccount: any;
  adminOfCenters: any;
  displayedColumnsOfAdmins: string[] = ['Name','Surname','Phone'];
  appointments: any;
  displayedColumnsOfAppointments: string[] = ['Date','Duration','AdminOfCenter']
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
      startTime: [''],
      endTime: [''],
      lat: [''],
      lng: ['']
    });

    const userString = localStorage.getItem('user');
    if(userString == null) {
      this.router.navigate(['/login'], {queryParams: { login: 'false' } });
    }
  
    this.user = JSON.parse((userString) || '{}');
    if(this.user.role != 'ADMIN_CENTER'){
      this.user = null;
      localStorage.clear();
      this.router.navigate([''], {queryParams: { role: 'false' } });
    }
  }

  async ngOnInit():  Promise<void>  {
    

    this.centeraccount = []    
    this.api.getCenterAccount().subscribe((response : any) => {
      this.centeraccount = response;
      
      this.form.patchValue({
        
        name: this.centeraccount.name,
        address: this.centeraccount.address,
        description: this.centeraccount.description,
        startTime: this.centeraccount.startTime,
        endTime: this.centeraccount.endTime,
        
     });  
    })


    this.api.getAdminsOfCenter(this.user.centerAccount.id).subscribe((response : any) => {
        this.adminOfCenters = response;
    });

    this.api.getAppointments(this.user.centerAccount.id).subscribe((response : any) => {
        this.appointments = response;
    });
  }


  async onSubmit(): Promise<void> {
  
        const name = this.form.get('name')?.value;
        const address = this.form.get('address')?.value;
        const description = this.form.get('description')?.value;
        const startTime = this.form.get('startTime')?.value;
        const endTime = this.form.get('endTime')?.value;
        this.api.updateCenterAccount({
          name: name,
          address: address,
          description: description,
          startTime: startTime,
          endTime: endTime,
          
        }).subscribe((response : any) => {
          this.ngOnInit()

        });


    
  }


}


interface marker {
	lat: number;
	lng: number;
	label: string;
	draggable: boolean;
}