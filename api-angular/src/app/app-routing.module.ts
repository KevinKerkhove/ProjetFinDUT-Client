import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './shared/auth-guard.service';
import {ListCreneauComponent} from './creneau/list-creneau/list-creneau.component';
import {FormAbsenceComponent} from './absence/form-absence/form-absence.component';
import {ListAbsenceComponent} from './absence/list-absence/list-absence.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'edt', component: ListCreneauComponent, canActivate: [AuthGuardService]},
  {path: 'absence/form', component: FormAbsenceComponent, canActivate: [AuthGuardService]},
  {path: 'absence/list', component: ListAbsenceComponent, canActivate: [AuthGuardService]},
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
