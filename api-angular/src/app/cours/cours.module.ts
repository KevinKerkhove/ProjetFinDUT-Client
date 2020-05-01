import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './cours/cours.component';
import { DetailsCoursComponent } from './details-cours/details-cours.component';
import { ListCoursComponent } from './list-cours/list-cours.component';
import {AngularMaterialModule} from '../angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [PartiesDashboardComponent, CoursComponent, DetailsCoursComponent, ListCoursComponent],
  imports: [
    CommonModule,
    CoursRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class CoursModule { }
