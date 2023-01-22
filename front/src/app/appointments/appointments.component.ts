import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  data = [];
  displayedColumns: string[] = ['date', 'duration', 'description', 'doctor', 'actions'];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAppointments().subscribe((response : any) => {
      this.data = response;
    });
  }

}
