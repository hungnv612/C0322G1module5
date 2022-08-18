import {Component, OnInit} from '@angular/core';
import {FacilityType} from '../../model/facility-type';
import {FacilityTypeService} from '../../service/facility-type.service';
import {FacilityService} from '../../service/facility.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityTypes: FacilityType[] = this.type.getAll();
  constructor(private type: FacilityTypeService,
              private facilityService: FacilityService,
              private router: Router) { }
  facilityForm: FormGroup = new FormGroup({
    facilityName: new FormControl(),
    are: new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    rentTypeId: new FormControl(),
    facilityTypeId: new FormControl(),
    standardRoom: new FormControl(),
    descriptionOtherConvenience: new FormControl(),
    poolArea: new FormControl(),
    numberOffloors: new FormControl(),
    facalityFree: new FormControl(),
    facalityImg: new FormControl(),
  });
  ngOnInit(): void {
  }
  submit() {
    const facility = this.facilityForm.value;
    console.log(facility);
    this.facilityService.saveFacility(facility);
    this.facilityForm.reset();
    this.router.navigate(['/facility']);
  }

}
