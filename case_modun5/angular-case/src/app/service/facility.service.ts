import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilities: Facility[] = [
    {
      id: 1,
      facilityName: 'Villa Beach Front',
      are: 25000,
      cost: 20000000,
      maxPeople: 2,
      rentTypeId: 2,
      facilityTypeId: 3,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOffloors: 4,
      facalityFree: 'ko có',
      facalityImg: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-M-1047x563.jpg'
    },
    {
      id: 2,
      facilityName: 'House Princess 01',
      are: 30000,
      cost: 12000000,
      maxPeople: 4,
      rentTypeId: 2,
      facilityTypeId: 3,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOffloors: 4,
      facalityFree: 'ko có',
      facalityImg: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-M-1047x563.jpg'
    },
    {
      id: 3,
      facilityName: 'Room Twin 01',
      are: 27000,
      cost: 14000000,
      maxPeople: 8,
      rentTypeId: 2,
      facilityTypeId: 3,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOffloors: 4,
      facalityFree: 'ko có',
      facalityImg: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_-Lagoon-Superior-double-bed-1047x563.jpg'
    },
    {
      id: 4,
      facilityName: 'Villa Beach Front',
      are: 25000,
      cost: 22000000,
      maxPeople: 7,
      rentTypeId: 2,
      facilityTypeId: 3,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOffloors: 4,
      facalityFree: 'ko có',
      facalityImg: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-M-1047x563.jpg'
    },
    {
      id: 5,
      facilityName: 'House Princess 01',
      are: 30000,
      cost: 32000000,
      maxPeople: 5,
      rentTypeId: 2,
      facilityTypeId: 3,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOffloors: 4,
      facalityFree: 'ko có',
      facalityImg: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-M-1047x563.jpg'
    },
    {
      id: 6,
      facilityName: 'Room Twin 01',
      are: 27000,
      cost: 42000000,
      maxPeople: 13,
      rentTypeId: 2,
      facilityTypeId: 3,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOffloors: 4,
      facalityFree: 'ko có',
      facalityImg: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_-Lagoon-Superior-double-bed-1047x563.jpg'
    },
    {
      id: 7,
      facilityName: 'Villa Beach Front',
      are: 25000,
      cost: 12000000,
      maxPeople: 2,
      rentTypeId: 2,
      facilityTypeId: 3,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOffloors: 4,
      facalityFree: 'ko có',
      facalityImg: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-M-1047x563.jpg'
    },
    {
      id: 8,
      facilityName: 'House Princess 01',
      are: 30000,
      cost: 34000000,
      maxPeople: 4,
      rentTypeId: 2,
      facilityTypeId: 3,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOffloors: 4,
      facalityFree: 'ko có',
      facalityImg: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-M-1047x563.jpg'
    },
    {
      id: 9,
      facilityName: 'Room Twin 01',
      are: 27000,
      cost: 23000000,
      maxPeople: 14,
      rentTypeId: 2,
      facilityTypeId: 3,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOffloors: 4,
      facalityFree: 'ko có',
      facalityImg: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_-Lagoon-Superior-double-bed-1047x563.jpg'
    }
  ];

  constructor() {}
  getAll() {
    return this.facilities;
  }

  findById(id: number) {
    return this.facilities.find(category => category.id === id);
  }
}
