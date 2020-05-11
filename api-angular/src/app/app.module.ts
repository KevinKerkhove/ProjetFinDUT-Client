import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdutiantComponent } from './edutiant/edutiant.component';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditAbsenceComponent } from './absence/edit-absence/edit-absence.component';
import { FormAbsenceComponent } from './absence/form-absence/form-absence.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EdutiantComponent,
    HomeComponent,
    CoursComponent,
    PageNotFoundComponent,
    EditAbsenceComponent,
    FormAbsenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
