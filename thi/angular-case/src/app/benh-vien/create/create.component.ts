import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhANService} from '../../service/benh-an.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BenhNhanService} from '../../service/benh-nhan.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  benhVienForm: FormGroup = new FormGroup({
    benhNhan: new FormGroup({
      id: new FormControl(''),
      tenBenhNhan: new FormControl(''),
    }),
    ngayNhapVien: new FormControl('', [Validators.required]),
    ngayRaVien: new FormControl('', [Validators.required]),
    lyDo: new FormControl('', [Validators.required]),
    phuongPhap: new FormControl('', [Validators.required, Validators.email]),
    bacSi: new FormControl('', [Validators.required]),
  });

  constructor(private benhANService: BenhANService,
              private activatedRoute: ActivatedRoute,
              private benhNhanService: BenhNhanService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const benhVien = this.benhVienForm.value;
    this.benhANService.saveBenhNhan(benhVien.benhNhan).subscribe(value => {
      this.benhNhanService.findById(value.id).subscribe(valueBN => {
        console.log(valueBN);
        benhVien.benhNhan = {
          id: valueBN.id,
          tenBenhNhan: valueBN.tenBenhNhan
        };
        this.benhANService.saveBenhAn(benhVien).subscribe(value1 => {
        }, error => {
        }, () => {
          this.router.navigate(['/benhVien']);
          this.toast.success('Thêm mới thành công', 'Thông báo');
        });
      });
    });

  }

}
