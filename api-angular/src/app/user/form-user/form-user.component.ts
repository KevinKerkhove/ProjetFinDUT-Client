import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Roles, User} from '../../models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {UserValidators} from '../user.validators';
import {FileInput, FileValidator} from 'ngx-material-file-input';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  @Input() user: User;
  @Output() updatedUser: EventEmitter<{user: User, pwd: string, avtr: FileInput}>;
  pageTitle: string;
  editForm: FormGroup;
  action: string;
  roles = Roles;
  aAccept = '.png, .jpg, .jpeg';
  maxSize = 300000;
  avatarFile: any = undefined;
  error: any;


  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private service: UserService) {
    this.updatedUser = new EventEmitter<{user: User, pwd: string, avtr: FileInput}>();
  }

  createForm() {
    this.editForm = new FormGroup({
      nom: new FormControl('nom', [Validators.required]),
      prenom: new FormControl('prenom', [Validators.required]),
      dateDeNaiss: new FormControl('date de naissance'),
      email: new FormControl('email'),
      role: new FormControl('role'),
      grade: new FormControl('grade'),
      password: new FormGroup({
        pwd: new FormControl('pwd', Validators.compose([Validators.minLength(6)])),
        confirmPwd: new FormControl('confirmPwd')
      }, UserValidators.passwordConfirming
      ),
      avatar: new FormControl('avatar', [FileValidator.maxContentSize(this.maxSize)])
    });
  }

  get accept() {
    return this.aAccept;
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
  get avatar() {
    return this.editForm.get('avatar');
  }
  get role() {
    return this.editForm.get('role');
  }
  get grade() {
    return this.editForm.get('grade');
  }
  get password() {
    return this.editForm.get('password').get('pwd');
  }
  get confirmPassword() {
    return this.editForm.get('password').get('confirmPwd');
  }

  ngOnInit() {
    this.createForm();
    const id = this.user.id;
    if (id === undefined) {
      this.pageTitle = 'Enregistrement d\'un utilisateur';
      this.action = 'create';
    } else {
      this.pageTitle = 'Modification d\'un utilisateur';
      this.action = 'edit';
      this.fillForm();
    }
  }

  avatarLocal(file: FileInput) {
    console.log('file : ', file);
    const reader = new FileReader();
    reader.onload = () => {
      this.avatarFile = reader.result;
    };
    reader.readAsDataURL(file.files[0]);
  }

  fillForm() {
    this.editForm.patchValue({
      nom: this.user.nom,
      prenom: this.user.prenom,
      dateDeNaiss: this.user.dateDeNaiss,
      email: this.user.email,
      role: this.user.role,
      grade: this.user.grade,
    });
  }

  onSubmit() {
    let pwd;
    let avtr;
    this.user.nom = this.nom.value;
    this.user.prenom = this.prenom.value;
    this.user.dateDeNaiss = this.dateDeNaiss.value;
    this.user.email = this.email.value;
    this.user.role = this.role.value;
    this.user.grade = this.grade.value;
    if (this.password.value) {
      pwd = this.password.value;
    }
    if (this.avatar) {
      avtr = this.avatar.value;
    }
    this.updatedUser.emit({
      user: this.user,
      pwd,
      avtr
    });
    console.log(this.updatedUser);
  }
}

