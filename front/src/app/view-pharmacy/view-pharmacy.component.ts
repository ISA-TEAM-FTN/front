import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-view-pharmacy',
  templateUrl: './view-pharmacy.component.html',
  styleUrls: ['./view-pharmacy.component.scss']
})
export class ViewPharmacyComponent implements OnInit {

  id = -1;
  pharmacy: any;
  doctors: any;
  admins: any;
  pharmacists: any;
  medicines: any;
  pharmacyAdmins: any;
  pharmacyDoctors = [];
  pharmacyMedicines = [];
  pharmacyPharmacists = [];

  displayedColumnsAdmins: string[] = ['firstName', 'lastName', 'email', 'actions'];
  displayedColumnsDoctors: string[] = ['firstName', 'lastName', 'email', 'rate', 'actions'];
  displayedColumnsPharmacists: string[] = ['firstName', 'lastName', 'email', 'rate', 'actions'];
  displayedColumnsMedicines: string[] = ['name', 'code', 'quantity', 'price', 'actions'];

  selectedAdmin: any;
  selectedDoctor: any;
  selectedPharmacists: any;
  selectedMedicine: any;
  selectedPrice: any;
  selectedQuantity: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private api: ApiService)
  {

  }

  fetch() {
    this.api.getPharmacy(this.id).subscribe((response: any) => {
      this.pharmacy = response;
    });

    this.api.getPharmacyPharmacists(this.id).subscribe((response: any) => {
      this.pharmacyPharmacists = response;
    });

    this.api.getPharmacyAdmins(this.id).subscribe((response: any) => {
      this.pharmacyAdmins = response;
    });

    this.api.getPharmacyDoctors(this.id).subscribe((response: any) => {
      this.pharmacyDoctors = response;
    });

    this.api.getPharmacyMedicines(this.id).subscribe((response: any) => {
      this.pharmacyMedicines = response;
    });

    this.api.getAllMedicines().subscribe((response: any) => {
      this.medicines = response;
    });

    this.api.getAdmins().subscribe((response: any) => {
      this.admins = response;
      console.log(this.admins);
    });

    this.api.getDoctors().subscribe((response: any) => {
      this.doctors = response;
    });

    this.api.getPharmacists().subscribe((response: any) => {
      this.pharmacists = response;
    });
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.id = param.id;
      this.fetch();
    })
  }

  addAdmin() {

    this.api.addPharmacyAdmin({
      pharmacyId: this.pharmacy.id,
      adminId: this.selectedAdmin
    }).subscribe((response: any) => {
      this.fetch();
    }, () => {
      this.fetch();
    });

  }

  addDoctor() {
    this.api.addPharmacyDoctor({
      pharmacyId: this.pharmacy.id,
      doctorId: this.selectedDoctor
    }).subscribe((response: any) => {
      this.fetch();
    }, () => {
      this.fetch();
    });
  }

  addPharmacists() {
    this.api.addPharmacyPharmacists({
      pharmacyId: this.pharmacy.id,
      pharmacistsId: this.selectedPharmacists
    }).subscribe((response: any) => {
      this.fetch();
    }, () => {
      this.fetch();
    });
  }

  addMedicine() {
    this.api.addPharmacyMedicine({
      pharmacyId: this.pharmacy.id,
      medicineId: this.selectedMedicine,
      quantity: this.selectedQuantity,
      price: this.selectedPrice
    }).subscribe((response: any) => {
      this.fetch();
    }, () => {
      this.fetch();
    });
  }
}
