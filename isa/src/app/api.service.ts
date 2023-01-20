import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:8081";
  constructor(private http: HttpClient) { }
  
  generateHeader() : any {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }

    return {
      headers: headers
    };
  }

  login(data: any) : any {
    return this.http.post(this.baseURL + "/api/login", data);
  }

  getCurrentUser() {
    return this.http.get(this.baseURL + '/api/users/current', this.generateHeader());
  }
}