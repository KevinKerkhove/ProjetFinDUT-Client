import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Absences} from '../../models/absence.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User, UTILISATEUR} from '../../models/user.model';
import {CRENEAUX, Creneaux} from '../../models/creneau.model';

@Component({
  selector: 'app-form-absence',
  templateUrl: './form-absence.component.html',
  styleUrls: ['./form-absence.component.css']
})
export class FormAbsenceComponent implements OnInit {
  @Input() absence: Absences;
  @Output() updatedAbsence: EventEmitter<Absences>;
  pageTitle: string;
  editForm: FormGroup;
  listEtudiants: User[] = [];
  listUser: User[] = UTILISATEUR;
  listCreneaux: Creneaux[] = CRENEAUX;

  constructor() {
    this.updatedAbsence = new EventEmitter<Absences>();
    this.listUser.forEach(user => {
      if (user.role === 'etudiant') {
        this.listEtudiants.push(user);
      }
    });
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      motif: new FormControl(null, [Validators.required]),
      justifiee: new FormControl(false),
      document: new FormControl('document'),
      idEtudiant: new FormControl('Etudiant'),
      idCreneau: new FormControl('Creneau')
    });
    if (this.absence === undefined) {
      this.pageTitle = 'Création d\'une absence';
    } else {
      this.pageTitle = 'Modification d\'une absence';
      this.fillForm();
    }
  }

  get motif() {
    return this.editForm.get('motif');
  }
  get justifiee() {
    return this.editForm.get('justifiee');
  }
  get document() {
    return this.editForm.get('document');
  }
  get idEtudiant() {
    return this.editForm.get('idEtudiant');
  }
  get idCreneau() {
    return this.editForm.get('idCreneau');
  }

  fillForm() {
    this.editForm.patchValue({
      motif: this.absence.motif,
      justifiee: this.absence.justifiee,
      document: this.absence.document,
      idEtudiant: this.absence.idEtudiant,
      idCreneau: this.absence.idCreneau
    });
  }

  onSubmit() {
    this.absence.motif = this.motif.value;
    this.absence.justifiee = this.justifiee.value;
    this.absence.document = this.document.value;
    this.absence.idEtudiant = this.idEtudiant.value;
    this.absence.idCreneau = this.idCreneau.value;
  }
}
