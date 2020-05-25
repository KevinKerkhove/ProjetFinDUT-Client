import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { FormAbsenceComponent } from './form-absence/form-absence.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
    declarations: [ListAbsenceComponent, FormAbsenceComponent],
  exports: [
    ListAbsenceComponent,
    FormAbsenceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AbsenceModule { }
