import { Injectable } from '@angular/core';
import {FacilityType} from '../model/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor() { }
  facilityTypes: FacilityType[] = [
    {
      id: 1,
      name: 'Villa',
    },
    {
      id: 2,
      name: 'House',
    },
    {
      id: 3,
      name: 'Room',
    },
  ];
  getAll() {
    return this.facilityTypes;
  }
}
