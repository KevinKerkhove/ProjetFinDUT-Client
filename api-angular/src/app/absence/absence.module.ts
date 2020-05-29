import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { FormAbsenceComponent } from './form-absence/form-absence.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';



@NgModule({
    declarations: [ListAbsenceComponent, FormAbsenceComponent],
  exports: [
    ListAbsenceComponent,
    FormAbsenceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AbsenceModule { }
