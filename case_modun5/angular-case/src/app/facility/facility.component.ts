import {Component, OnInit} from '@angular/core';
import {Facility} from '../model/facility';
import {CustomerService} from '../service/customer.service';
import {FacilityService} from '../service/facility.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility[] = [];
  faclityObjModal: Facility;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilities = this.facilityService.getAll();
  }

  displayModalDetail(id: number): void {
    this.faclityObjModal = this.facilityService.findById(id);
  }
}
