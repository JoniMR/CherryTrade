import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl: string = 'http://localhost:5000/api/user/add';
  constructor(private http: HttpClient) {}

  addUser(name: string, surname1: string, surname2: string, birthdate: Date, email: string, password: string): Observable<number> {
    const body = {
      name: name,
      surname1: surname1,
      surname2: surname2,
      birthdate: birthdate,
      email: email,
      password: password,
    };
    return this.http.post<number>(this.registerUrl, body);
  }
}

