import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Absences} from '../../models/absences.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user.model';
import {Creneaux} from '../../models/creneaux.model';

class Absence {
}

@Component({
  selector: 'app-form-absence',
  templateUrl: './form-absence.component.html',
  styleUrls: ['./form-absence.component.css']
})
export class FormAbsenceComponent implements OnInit {
  @Input() absence: Absences;
  @Output() updatedAbsence: EventEmitter<{absence: Absence}>;
  editForm: FormGroup;
  etudiants: User[];
  creneaux: Creneaux[];
  pageTitle: string;
  action: string;

  constructor(private router: Router, private route: ActivatedRoute, ) {
    this.updatedAbsence = new EventEmitter<{absence: Absence}>();
  }

  createForm() {
    this.editForm = new FormGroup({
      motif: new FormControl('', [Validators.required, Validators.minLength(4)]),
      justifiee: new FormControl('' ),
      document: new FormControl(''),
      idEtudiant : new FormControl('', [Validators.required, Validators.minLength(1)]),
      idCreneaux : new FormControl('', [Validators.required, Validators.minLength(1)]),
    });
  }

  get motif() {
    return this.editForm.get('motif');
  }

  get justifiee() {
    return this.editForm.get('justifiee');
  }

  get idEtudiant() {
    return this.editForm.get('idEtudiant');
  }

  get document() {
    return this.editForm.get('document');
  }

  get idCreneau() {
    return this.editForm.get('idCreneau');
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
    this.updatedAbsence.emit({
      absence: this.absence
    });
    console.log(this.updatedAbsence);
  }

}
