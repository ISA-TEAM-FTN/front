import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  data = [];
  displayedColumns: string[] = ['date', 'duration', 'description', 'doctor', 'actions'];
  user: any;

  constructor(private api: ApiService,private router: Router) {
    const userString = localStorage.getItem('user');
    if(userString == null) {
      this.router.navigate(['/login'], {queryParams: { login: 'false' } });
    }
  
    this.user = JSON.parse((userString) || '{}');
   }

  ngOnInit(): void {
    this.api.getAppointments().subscribe((response : any) => {
      this.data = response;
    });
  }

}
