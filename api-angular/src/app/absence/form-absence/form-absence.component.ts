import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Absence} from '../../models/absence.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User, UTILISATEUR} from '../../models/user.model';
import {CRENEAUX, Creneaux} from '../../models/creneau.model';
import {FileInput, FileValidator} from 'ngx-material-file-input';
import {AuthService} from '../../shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AbsenceService} from '../absence.services';

@Component({
  selector: 'app-form-absence',
  templateUrl: './form-absence.component.html',
  styleUrls: ['./form-absence.component.css']
})
export class FormAbsenceComponent implements OnInit {
  @Input() absence: Absence;
  @Output() updatedAbsence: EventEmitter<{absence: Absence, document: FileInput}>;
  aAccept = '.png, .jpg, .jpeg';
  pageTitle: string;
  editForm: FormGroup;
  maxSize = 300000;
  error: any;
  action: string;
  documentFile: any = undefined;
  listEtudiants: User[] = [];
  listUser: User[] = UTILISATEUR;
  listCreneaux: Creneaux[] = CRENEAUX;

  constructor(private authService: AuthService, private router: Router,
              private route: ActivatedRoute, private service: AbsenceService, private authenticationService: AuthService) {
    this.updatedAbsence = new EventEmitter<{absence: Absence, document: FileInput}>();
    this.listUser.forEach(user => {
      if (user.role === 'etudiant') {
        this.listEtudiants.push(user);
      }
    });
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      motif: new FormControl('', [Validators.required]),
      justifiee: new FormControl(false),
      document: new FormControl(null, [FileValidator.maxContentSize(this.maxSize)]),
      idEtudiant: new FormControl('', [Validators.required]),
      idCreneau: new FormControl('', [Validators.required])
    });
    if (this.absence === undefined) {
      this.pageTitle = 'Création d\'une absence';
    } else {
      this.pageTitle = 'Modification d\'une absence';
      this.fillForm();
    }
  }

  get accept() {
    return this.aAccept;
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
      idEtudiant: this.absence.idEtudiant,
      idCreneau: this.absence.idCreneau
    });
  }

  onSubmit() {
    let document: FileInput;
    this.absence.motif = this.motif.value;
    this.absence.justifiee = this.justifiee.value;
    this.absence.idEtudiant = this.idEtudiant.value;
    this.absence.idCreneau = this.idCreneau.value;
    if (this.document) {
      document = this.document.value;
    }
    this.updatedAbsence.emit({
      absence: this.absence,
      document
    });
  }

  documentLocal(file: FileInput) {
    console.log('file : ', file);
    const reader = new FileReader();
    reader.onload = () => {
      this.documentFile = reader.result;
    };
    reader.readAsDataURL(file.files[0]);
  }
}
