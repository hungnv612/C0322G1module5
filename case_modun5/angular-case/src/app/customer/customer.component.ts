import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAll();
  }
}
