import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { FormUserComponent } from './form-user/form-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    declarations: [ListUserComponent, FormUserComponent],
    exports: [
        ListUserComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatSelectModule,
    MaterialFileInputModule,
    MatIconModule
  ]
})
export class UserModule { }
