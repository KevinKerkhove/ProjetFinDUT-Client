import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModuleComponent } from './list-module/list-module.component';



@NgModule({
    declarations: [ListModuleComponent],
    exports: [
        ListModuleComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ModuleModule { }
