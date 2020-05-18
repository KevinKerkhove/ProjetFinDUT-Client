import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user/form-user.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [FormUserComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class UserModule { }
