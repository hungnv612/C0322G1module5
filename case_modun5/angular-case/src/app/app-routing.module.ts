import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
import {CreateComponent} from './customer/create/create.component';
import {EditComponent} from './customer/edit/edit.component';
import {FacilityComponent} from './facility/facility.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {ContractComponent} from './contract/contract.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {ContractEditComponent} from './contract/contract-edit/contract-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},

  { path: 'customer', component: CustomerComponent},
  { path: 'customer/create', component: CreateComponent},
  { path: 'customer/edit', component: EditComponent},
  { path: 'facility', component: FacilityComponent},
  { path: 'facility/create', component: FacilityCreateComponent},
  { path: 'facility/edit', component: FacilityEditComponent},
  { path: 'contract', component: ContractComponent},
  { path: 'contract/create', component: ContractCreateComponent},
  { path: 'contract/edit', component: ContractEditComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
