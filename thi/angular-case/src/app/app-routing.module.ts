import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {BenhVienComponent} from './benh-vien/benh-vien.component';
import {EditComponent} from './benh-vien/edit/edit.component';
import {CreateComponent} from './benh-vien/create/create.component';


const routes: Routes = [
  {path: 'benhVien', component: BenhVienComponent},
  {path: 'benhVien/edit/:id', component: EditComponent},
  {path: 'benhVien/create' , component: CreateComponent},
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
