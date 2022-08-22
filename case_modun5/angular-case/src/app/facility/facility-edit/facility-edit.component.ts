import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityType} from '../../model/facility-type';
import {FacilityTypeService} from '../../service/facility-type.service';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  facilityForm: FormGroup;
  id: number;
  facilityTypes: FacilityType[] = this.type.getAll();

  constructor(private facilityService: FacilityService,
              private type: FacilityTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        facilityName: new FormControl(facility.facilityName),
        are: new FormControl(facility.are),
        cost: new FormControl(facility.cost),
        maxPeople: new FormControl(facility.maxPeople),
        rentTypeId: new FormControl(facility.rentTypeId),
        facilityTypeId: new FormControl(facility.facilityTypeId),
        standardRoom: new FormControl(facility.standardRoom),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience),
        poolArea: new FormControl(facility.poolArea),
        numberOffloors: new FormControl(facility.numberOffloors),
        facalityFree: new FormControl(facility.facalityFree),
        facalityImg: new FormControl(facility.facalityImg),
      });
    });
  }

  ngOnInit(): void {
  }

  editFacility(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.editFacility(id, facility);
    this.router.navigate(['facility']);
  }

  getFacility(id: number) {
    return this.facilityService.findByIdFacility(id);
  }

}
