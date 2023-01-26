import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-blood-types',
  templateUrl: './blood-types.component.html',
  styleUrls: ['./blood-types.component.scss']
})
export class BloodTypesComponent {
  user: any;
  bloodA: any;
  bloodB: any;
  bloodAB: any;
  bloodZero: any;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private router: Router, private api: ApiService) {
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
    

    this.api.getBloodAType(this.user.centerAccount.id).subscribe((response : any) => {
      this.bloodA = response
    })
    this.api.getBloodBType(this.user.centerAccount.id).subscribe((response : any) => {
      this.bloodB = response
    })
    this.api.getBloodABType(this.user.centerAccount.id).subscribe((response : any) => {
      this.bloodAB = response
    })
    this.api.getBlood0Type(this.user.centerAccount.id).subscribe((response : any) => {
      this.bloodZero = response
    })
  }
}
