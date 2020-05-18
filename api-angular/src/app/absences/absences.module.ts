import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceComponent } from './absence/absence.component';
import { FormAbsenceComponent } from './form-absence/form-absence.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AbsenceComponent, FormAbsenceComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class AbsencesModule { }
