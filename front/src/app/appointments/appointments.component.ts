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
      this.router.navigate([''], {queryParams: { login: 'false' } });
    }
    if(this.user.role != 'ADMIN_CENTER'){
      this.user = null;
      localStorage.clear();
      this.router.navigate([''], {queryParams: { role: 'false' } });
    }
    this.user = JSON.parse((userString) || '{}');
   }

  ngOnInit(): void {
    this.api.getAppointments(this.user.centeraccount.id).subscribe((response : any) => {
      this.data = response;
    });
  }

}
