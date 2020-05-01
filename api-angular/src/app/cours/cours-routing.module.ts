import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursComponent} from './cours/cours.component';
import {DetailsCoursComponent} from './details-cours/details-cours.component';
import {ListCoursComponent} from './list-cours/list-cours.component';

const adminRoutes: Routes = [
  {
    path: 'cours',
    component: CoursComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'list', component: ListCoursComponent },
          { path: ':id', component: DetailsCoursComponent}
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
