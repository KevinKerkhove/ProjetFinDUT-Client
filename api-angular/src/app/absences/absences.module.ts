import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsAbsenceComponent } from '../details-absence/details-absence.component';
import { ListAbsencesComponent } from '../list-absences/list-absences.component';
import { AbsenceComponent } from '../absence/absence.component';



@NgModule({
  declarations: [DetailsAbsenceComponent, ListAbsencesComponent, AbsenceComponent],
  imports: [
    CommonModule
  ]
})
export class AbsencesModule { }
