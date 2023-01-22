import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = [];
  displayedColumns: string[] = ['name', 'address', 'actions'];
  dataUsers = []
  displayedColumnsUsers: string[] = ['firstName', 'lastName', 'role'];
  term = '';
  role = 'PATIENT';


  constructor(private router: Router, private api: ApiService)
  {
  }

  ngOnInit(): void {

    this.api.getAllPharmacy().subscribe((response : any) => {
      this.data = response;
    });

    this.api.searchUsers('', 'PATIENT').subscribe((response: any) => {
      this.dataUsers = response;
    });
  }

  search() {
    this.api.searchUsers(this.term, this.role).subscribe((response: any) => {
      this.dataUsers = response;
    });
  }

}
