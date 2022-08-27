import {BenhNhan} from './benh-nhan';

export interface BenhAn {
  id?: number;
  benhNhan?: BenhNhan;
  ngayNhapVien?: string;
  ngayRaVien?: string;
  lyDo?: string;
  phuongPhap?: string;
  bacSi?: string;
}
