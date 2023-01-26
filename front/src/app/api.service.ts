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


  addAppointment(data: any) {
    return this.http.post(this.baseURL + '/api/appointments/add', data, this.getAuthHeader());
  }


  getAppointments() {
    return this.http.get(this.baseURL + '/api/center/appointments/', this.getAuthHeader());
  }

  
  getCenterAccount() {
    return this.http.get(this.baseURL + '/api/center/', this.getAuthHeader());
  }

  updateCenterAccount(data: any) {
    return this.http.put(this.baseURL + "/api/center", data, this.getAuthHeader());
  }

  searchCenter(data: any) {
    return this.http.post(this.baseURL + "/api/center/search", data);
  }

  createAppointment(data: any) {
    return this.http.post(this.baseURL + "/api/center/create-appointment", data, this.getAuthHeader());
  }

  getAdminsOfCenter(id: any) {
    return this.http.get(this.baseURL + "/api/center/admins" + id, this.getAuthHeader());
  }


}
