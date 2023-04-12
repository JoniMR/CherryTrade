import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoInterface } from '../models/crypto.model';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private allCryptosUrl: string = 'http://localhost:5000/api/crypto/get/all';
  constructor(private http: HttpClient) {}

  getAllCryptos(): Observable<CryptoInterface[]> {
    const lista = this.http.get<CryptoInterface[]>(this.allCryptosUrl);
    return lista;
  }
}
