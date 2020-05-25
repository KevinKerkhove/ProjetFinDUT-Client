import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupeComponent } from './list-groupe/list-groupe.component';



@NgModule({
    declarations: [ListGroupeComponent],
    exports: [
        ListGroupeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GroupeModule { }
