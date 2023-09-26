import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CreateUserComponent {
  private apiUrl = 'https://localhost:5347/';

  constructor(private http: HttpClient) { }

  createUser(user: any) {
    return this.http.post(this.apiUrl + 'HR/v1/User', user);
  }
}
