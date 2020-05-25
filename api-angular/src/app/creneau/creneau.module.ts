import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCreneauComponent } from './list-creneau/list-creneau.component';



@NgModule({
    declarations: [ListCreneauComponent],
    exports: [
        ListCreneauComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CreneauModule { }
