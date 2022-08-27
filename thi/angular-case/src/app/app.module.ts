import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {ToastrModule} from 'ngx-toastr';
import { BenhVienComponent } from './benh-vien/benh-vien.component';
import { EditComponent } from './benh-vien/edit/edit.component';
import { CreateComponent } from './benh-vien/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BenhVienComponent,
    EditComponent,
    CreateComponent
  ],
    imports: [
        NgxPaginationModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot({timeOut: 2000})
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
