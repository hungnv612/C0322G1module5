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
  temp: string;
  constructor(private type: FacilityTypeService,
              private facilityService: FacilityService,
              private router: Router) {
  }

  facilityForm: FormGroup = new FormGroup({
    facilityName: new FormControl('', [Validators.required, Validators.pattern('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$')]),
    are: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+$')]),
    rentTypeId: new FormControl('', [Validators.required]),
    facilityTypeId: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    descriptionOtherConvenience: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+$')]),
    numberOffloors: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+$')]),
    facalityFree: new FormControl('', [Validators.required]),
    facalityImg: new FormControl('', [Validators.required]),
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
  changeFacility(value: any) {
    this.temp = value;
  }
}
