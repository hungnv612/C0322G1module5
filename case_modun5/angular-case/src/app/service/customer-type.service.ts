import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor() { }
  customerTypes: CustomerType[] = [
    {
      id: 1,
      name: 'Silver',
    },
    {
      id: 2,
      name: 'Gold',
    },
    {
      id: 3,
      name: 'Diamond',
    },
    {
      id: 4,
      name: 'Platinum',
    }
  ];
  getAll() {
    return this.customerTypes;
  }
}
