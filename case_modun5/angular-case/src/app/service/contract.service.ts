import { Injectable } from '@angular/core';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contracts: Contract[] = [
    {
      idContarcct: 1,
      facility: {id: 1, facilityName: 'Villa Beach Front'},
      customer: {id: 1, name: 'Hung'},
      startDate: '2022/09/09',
      endDate: '2022/12/12',
      deposit: 200000,
      totalMoney: 30000000,
    },
    {
      idContarcct: 2,
      facility: {id: 2, facilityName: 'House Princess 01'},
      customer: {id: 2, name: 'si'},
      startDate: '2022/09/09',
      endDate: '2022/12/12',
      deposit: 200000,
      totalMoney: 30000000,
    },
    {
      idContarcct: 3,
      facility: {id: 3, facilityName: 'Room Twin 01'},
      customer: {id: 3, name: 'lam'},
      startDate: '2022/09/09',
      endDate: '2022/12/12',
      deposit: 200000,
      totalMoney: 30000000,
    },
  ];
  constructor() { }
  getAll() {
    return this.contracts;
  }
}
