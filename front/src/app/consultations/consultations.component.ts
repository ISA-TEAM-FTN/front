import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {

  data = [];
  displayedColumns: string[] = ['date', 'duration', 'doctor', 'actions'];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getConsultations().subscribe((response : any) => {
      this.data = response;
    });
  }

}
