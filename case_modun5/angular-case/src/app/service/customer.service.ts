import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    {
      id: 1,
      type: {id: 1, name: 'Silver'},
      name: 'Hung',
      dayOfBirth: '2001/12/12',
      gender: 'Nam',
      idCard: '123123123',
      phone: '0905111234',
      email: 'hung@gmail.com',
      address: '592 núi thành',
    },
    {
      id: 2,
      type: {id: 2, name: 'Gold'},
      name: 'si',
      dayOfBirth: '2001/12/12',
      gender: 'Nam',
      idCard: '123123123',
      phone: '0905111234',
      email: 'si@gmail.com',
      address: '592 si thành',
    },
    {
      id: 3,
      type: {id: 3, name: 'Diamond'},
      name: 'lam',
      dayOfBirth: '2001/12/12',
      gender: 'Nam',
      idCard: '123123123',
      phone: '0905111234',
      email: 'lam@gmail.com',
      address: '592 lam thành',
    },
    {
      id: 4,
      type: {id: 4, name: 'Platinum'},
      name: 'hai',
      dayOfBirth: '2001/12/12',
      gender: 'Nam',
      idCard: '123123123',
      phone: '0905111234',
      email: 'hai@gmail.com',
      address: '592 hai thành',
    }
  ];
  constructor() { }
  getAll() {
    return this.customers;
  }
  saveCustomer(customer: Customer) {
    customer.id = this.customers.length + 1;
    this.customers.push(customer);
  }
}
