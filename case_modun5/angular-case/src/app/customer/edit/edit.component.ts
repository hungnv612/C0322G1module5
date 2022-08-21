import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customerType: CustomerType[] = this.type.getAll();

  constructor(private customerService: CustomerService,
              private type: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        type: new FormControl(customer.type.name, [Validators.required]),
        name: new FormControl(customer.name, [Validators.required]),
        dayOfBirth: new FormControl(customer.dayOfBirth, [Validators.required]),
        gender: new FormControl(customer.gender, [Validators.required]),
        idCard: new FormControl(customer.idCard, [Validators.required]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required]),
      });
    });
  }

  ngOnInit(): void {
  }

  editCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.editCustomer(id, customer);
    this.router.navigate(['customer']);
  }

  getCustomer(id: number) {
    return this.customerService.findByIdCustomer(id);
  }
}
