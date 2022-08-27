import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {BenhNhan} from '../model/benh-nhan';

const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<BenhNhan[]> {
    return this.http.get<BenhNhan[]>(API_URL + '/BenhNhan');
  }

  findById(id: number): Observable<BenhNhan> {
    return this.http.get<BenhNhan>(API_URL + `/BenhNhan/${id}`);
  }
}
