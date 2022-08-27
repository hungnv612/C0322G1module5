import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BenhANService} from '../service/benh-an.service';
import {BenhAn} from '../model/benh-an';

@Component({
  selector: 'app-benh-vien',
  templateUrl: './benh-vien.component.html',
  styleUrls: ['./benh-vien.component.css']
})
export class BenhVienComponent implements OnInit {

  benhAns: BenhAn[] = [];
  id: number;
  name: string;

  constructor(private benhAnService: BenhANService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.benhAnService.getAll().subscribe(benhAn => {
      this.benhAns = benhAn;
    });
  }
  openDelete(id: number, name: string): void {
    this.id = id;
    this.name = name;
  }
  delete(id: number): void {
    this.benhAnService.deleteBenhAn(id).subscribe(() => {
      this.getAll();
      this.toast.success('xóa mới thành công', 'Thông báo');
    }, e => {
      console.log(e);
    });
  }
}
