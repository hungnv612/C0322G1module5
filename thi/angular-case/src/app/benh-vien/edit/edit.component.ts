import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhNhan} from '../../model/benh-nhan';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {BenhANService} from '../../service/benh-an.service';
import {BenhNhanService} from '../../service/benh-nhan.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  benhVienForm: FormGroup;
  id: number;
  benhNhans: BenhNhan[] = [];

  constructor(private benhANService: BenhANService,
              private activatedRoute: ActivatedRoute,
              private benhNhanService: BenhNhanService,
              private router: Router,
              private toast: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
  }

  edit(id: number) {
    const benhVien = this.benhVienForm.value;
    this.benhANService.updateBenhAn(id, benhVien).subscribe(Ơvalue => {
      this.benhANService.updateBenhNhan(benhVien.benhNhan.id, benhVien.benhNhan).subscribe(value => {
      }),
        this.router.navigate(['/benhVien']);
      this.toast.success('Cập nhập thành công', 'Thông báo');
    });

  }

  getCustomer(id: number) {
    return this.benhANService.findById(id).subscribe(benhAn => {
      this.benhVienForm = new FormGroup({
        id: new FormControl(benhAn.id),
        benhNhan: new FormGroup({
          id: new FormControl(benhAn.benhNhan.id, [Validators.required]),
          tenBenhNhan: new FormControl(benhAn.benhNhan.tenBenhNhan, [Validators.required]),
        }),
        ngayNhapVien: new FormControl(benhAn.ngayNhapVien, [Validators.required]),
        ngayRaVien: new FormControl(benhAn.ngayRaVien, [Validators.required]),
        lyDo: new FormControl(benhAn.lyDo, [Validators.required]),
        phuongPhap: new FormControl(benhAn.phuongPhap, [Validators.required]),
        bacSi: new FormControl(benhAn.bacSi, [Validators.required]),
      });
    });
  }
}
