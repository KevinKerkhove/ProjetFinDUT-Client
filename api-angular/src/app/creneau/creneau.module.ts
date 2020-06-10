import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCreneauComponent } from './list-creneau/list-creneau.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
    declarations: [ListCreneauComponent],
    exports: [
        ListCreneauComponent
    ],
    imports: [
        CommonModule,
      BrowserAnimationsModule,
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
    ]
})
export class CreneauModule { }
