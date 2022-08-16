import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateComponent } from './customer/create/create.component';
import { EditComponent } from './customer/edit/edit.component';
import { FacilityComponent } from './facility/facility.component';
import { ContractComponent } from './contract/contract.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerComponent,
    CreateComponent,
    EditComponent,
    FacilityComponent,
    ContractComponent,
    ContractCreateComponent,
    ContractEditComponent,
    FacilityCreateComponent,
    FacilityEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
