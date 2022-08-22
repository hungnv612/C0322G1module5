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
  id: number;
  name: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.displayModalDetail(1);
  }

  getAll() {
    this.facilities = this.facilityService.getAll();
  }

  displayModalDetail(id: number): void {
    this.faclityObjModal = this.facilityService.findById(id);
    console.log(this.faclityObjModal);
  }
  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.facilityService.deleteFacility(id);
    this.facilities = this.facilityService.getAll();
  }
}
