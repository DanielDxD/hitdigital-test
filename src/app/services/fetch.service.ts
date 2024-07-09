import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { FetchResult } from '../../models/FetchResult';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get<FetchResult>("https://hitdigital.com.br/test.php")
  }
}
