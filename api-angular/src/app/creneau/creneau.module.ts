import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCreneauComponent } from './list-creneau/list-creneau.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [ListCreneauComponent],
    exports: [
        ListCreneauComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      NgbModalModule,
      FlatpickrModule.forRoot(),
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
    ]
})
export class CreneauModule { }
