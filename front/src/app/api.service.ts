import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:8081";

  constructor(private http: HttpClient) { }

  getAuthHeader(): any {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }

    return {
      headers: headers
    };
  }

  register(data: any) {
    return this.http.post(this.baseURL + "/api/users/register", data);
  }

  addUser(data: any) {
    return this.http.post(this.baseURL + "/api/users/add", data, this.getAuthHeader());
  }

  updateProfile(data: any) {
    return this.http.put(this.baseURL + "/api/users/update-profile", data, this.getAuthHeader());
  }

  login(data: any): any {
    return this.http.post(this.baseURL + "/api/users/login", data);
  }

  getCurrentUser(): any {
    return this.http.get(this.baseURL + "/api/users/current", this.getAuthHeader());
  }

  changePassword(data: any): any {
    return this.http.put(this.baseURL + "/api/users/change-password", data, this.getAuthHeader());
  }

  addPharmacy(data: any) {
    return this.http.post(this.baseURL + "/api/pharmacies/add", data, this.getAuthHeader());
  }

  getAllPharmacy() {
    return this.http.get(this.baseURL + "/api/pharmacies/get-all", this.getAuthHeader());
  }

  getPharmacy(id: any) {
    return this.http.get(this.baseURL + "/api/pharmacies/" + id, this.getAuthHeader());
  }

  addMedicine(data: any) {
    return this.http.post(this.baseURL + "/api/medicines/add", data, this.getAuthHeader());
  }

  getAllMedicines() {
    return this.http.get(this.baseURL + "/api/medicines/get-all", this.getAuthHeader());
  }

  searchUsers(term: any, role: any) {
    return this.http.get(this.baseURL + "/api/users/search?term=" + term + "&role=" + role, this.getAuthHeader());
  }

  getPharmacyAdmins(id: any) {
    return this.http.get(this.baseURL + "/api/pharmacies/" + id + "/get-admins", this.getAuthHeader());
  }

  getPharmacyDoctors(id: any) {
    return this.http.get(this.baseURL + "/api/pharmacies/" + id + "/get-doctors", this.getAuthHeader());
  }

  getPharmacyMedicines(id: any) {
    return this.http.get(this.baseURL + "/api/pharmacies/" + id + "/get-medicines", this.getAuthHeader());
  }

  getPharmacyPharmacists(id: any) {
    return this.http.get(this.baseURL + "/api/pharmacies/" + id + "/get-pharmacists", this.getAuthHeader());
  }

  addPharmacyAdmin(data: any) {
    return this.http.post(this.baseURL + "/api/pharmacies/add-admin", data, this.getAuthHeader());
  }

  addPharmacyPharmacists(data: any) {
    return this.http.post(this.baseURL + "/api/pharmacies/add-pharmacists", data, this.getAuthHeader());
  }

  addPharmacyDoctor(data: any) {
    return this.http.post(this.baseURL + "/api/pharmacies/add-doctor", data, this.getAuthHeader());
  }

  addPharmacyMedicine(data: any) {
    return this.http.post(this.baseURL + "/api/pharmacies/add-medicine", data, this.getAuthHeader());
  }

  getDoctors() {
    return this.http.get(this.baseURL + "/api/users/doctors", this.getAuthHeader());
  }

  getAdmins() {
    return this.http.get(this.baseURL + "/api/users/pharmacy-admins", this.getAuthHeader());
  }

  getPharmacists() {
    return this.http.get(this.baseURL + "/api/users/pharmacies", this.getAuthHeader());
  }

  addAppointment(data: any) {
    return this.http.post(this.baseURL + '/api/appointments/add', data, this.getAuthHeader());
  }

  addConsultation(data: any) {
    return this.http.post(this.baseURL + '/api/consultations/add', data, this.getAuthHeader());
  }

  getAppointments() {
    return this.http.get(this.baseURL + '/api/appointments/', this.getAuthHeader());
  }

  getConsultations() {
    return this.http.get(this.baseURL + '/api/consultations/', this.getAuthHeader());
  }

  getCenterAccount() {
    return this.http.get(this.baseURL + '/api/center/', this.getAuthHeader());
  }

  updateCenterAccount(data: any) {
    return this.http.put(this.baseURL + "/api/center", data, this.getAuthHeader());
  }
}
