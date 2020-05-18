import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  @Input() user: User;
  @Output() updatedUser: EventEmitter<{user: User}>;
  editForm: FormGroup;
  pageTitle: string;
  action: string;
  roles: string[] = ['etudiant', 'enseignant', 'secretariat'];

  constructor(private router: Router, private route: ActivatedRoute, ) {
    this.updatedUser = new EventEmitter<{user: User}>();
  }

  createForm() {
    this.editForm = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      prenom: new FormControl('', [Validators.required]),
      dateDeNaiss: new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)]),
      avatar : new FormControl(''),
      grade : new FormControl(''),
      role : new FormControl('', [Validators.required]),
    });
  }

  get nom() {
    return this.editForm.get('nom');
  }

  get prenom() {
    return this.editForm.get('prenom');
  }

  get dateDeNaiss() {
    return this.editForm.get('dateDeNaiss');
  }

  get email() {
    return this.editForm.get('email');
  }

  get password() {
    return this.editForm.get('password');
  }
  get avatar() {
    return this.editForm.get('avatar');
  }

  get grade() {
    return this.editForm.get('grade');
  }

  get role() {
    return this.editForm.get('role');
  }

  ngOnInit() {
    this.createForm();
    const id = this.user.id;
    if (id === -1) {
      this.pageTitle = 'Enregistrement d\'un utilisateur';
      this.action = 'create';
    } else {
      this.action = 'edit';
      this.pageTitle = 'Edition d\' un utilisateur';
      this.fillForme();
    }
  }

  fillForme() {
    this.editForm.patchValue({
      nom: this.user.nom,
      prennom: this.user.prenom,
      dateDeNaiss: this.user.dateDeNaiss,
      email: this.user.email,
      password: this.user.password,
      avatar: this.user.avatar,
      grade: this.user.grade,
      role: this.user.role
    });
  }

  onSubmit() {
    this.user.nom = this.nom.value;
    this.user.prenom = this.prenom.value;
    this.user.dateDeNaiss = this.dateDeNaiss.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.avatar = this.avatar.value;
    this.user.grade = this.grade.value;
    this.user.role = this.role.value;
    this.updatedUser.emit({
      user: this.user
    });
    console.log(this.updatedUser);
  }

}

