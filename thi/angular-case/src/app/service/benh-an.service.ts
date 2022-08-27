import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {BenhAn} from '../model/benh-an';
import {BenhNhan} from '../model/benh-nhan';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BenhANService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<BenhAn[]> {
    return this.http.get<BenhAn[]>(API_URL + '/BenhAn');
  }

  saveBenhAn(benhAn: BenhAn) {
    return this.http.post<BenhAn>(API_URL + '/BenhAn', benhAn);
  }

  saveBenhNhan(benhNhan: BenhNhan) {
    return this.http.post<BenhNhan>(API_URL + '/BenhNhan', benhNhan);
  }

  findById(id: number): Observable<BenhAn> {
    return this.http.get<BenhAn>(`${API_URL}/BenhAn/${id}`);
  }

  updateBenhAn(id: number, benhAn: BenhAn): Observable<BenhAn> {
    return this.http.put<BenhAn>(`${API_URL}/BenhAn/${id}`, benhAn);
  }

  updateBenhNhan(id: number, benhNhan: BenhNhan): Observable<BenhNhan> {
    return this.http.put<BenhAn>(`${API_URL}/BenhNhan/${id}`, benhNhan);
  }

  deleteBenhAn(id: number): Observable<BenhAn> {
    return this.http.delete<BenhAn>(`${API_URL}/BenhAn/${id}`);
  }
}
