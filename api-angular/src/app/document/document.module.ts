import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDocumentComponent } from './form-document/form-document.component';
import { DocumentsComponent } from './documents/documents.component';



@NgModule({
  declarations: [FormDocumentComponent, DocumentsComponent],
  imports: [
    CommonModule
  ]
})
export class DocumentModule { }
