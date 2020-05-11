import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Absence} from '../../models/absence.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AbsencesService} from '../absences.service';

@Component({
  selector: 'app-form-absence',
  templateUrl: './form-absence.component.html',
  styleUrls: ['./form-absence.component.css']
})
export class FormAbsenceComponent implements OnInit {
  @Input() absence: Absence;
  @Output() updatedAbsence: EventEmitter<{absence: Absence}>;
  editForm: FormGroup;
  maxSize = 300000;
  error: any;
  pageTitle: string;
  action: string;

  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute, private service: AbsencesService) {
    this.updatedAbsence = new EventEmitter<{absence: Absence}>();
  }

  createForm() {
    this.editForm = new FormGroup({
      motif: new FormControl('', [Validators.required, Validators.minLength(4)]),
      justifie: new FormControl('' ),
      idEtudiant : new FormControl('', [Validators.required, Validators.minLength(1)]),
      idDocument : new FormControl('', [Validators.required, Validators.minLength(1)]),
    });
  }

  get motif() {
    return this.editForm.get('motif');
  }

  get justifie() {
    return this.editForm.get('justifie');
  }

  get idEtudiant() {
    return this.editForm.get('idEtudiant');
  }

  get idDocument() {
    return this.editForm.get('idDocument');
  }
  ngOnInit() {
    this.createForm();
    const id = this.absence.id;
    if (id === -1) {
      this.pageTitle = 'Enregistrement d\'une absence';
      this.action = 'create';
    } else {
      this.action = 'edit';
      this.pageTitle = 'Edition d\' une absence';
      this.fillForme();
    }
  }

  fillForme() {
    this.editForm.patchValue({
      motif: this.absence.motif,
      justifie: this.absence.justifie,
      idEtudiant: this.absence.idEtudiant,
      idDocument: this.absence.idDocument
    });
  }

  onSubmit() {
    this.absence.motif = this.motif.value;
    this.absence.justifie = this.justifie.value;
    this.absence.idEtudiant = this.idEtudiant.value;
    this.absence.idDocument = this.idDocument.value;
    this.updatedAbsence.emit({
      absence: this.absence
    });
    console.log(this.updatedAbsence);
  }

}
