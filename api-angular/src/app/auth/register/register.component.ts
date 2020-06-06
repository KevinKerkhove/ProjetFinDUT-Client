import {Component, OnInit} from '@angular/core';
import {Roles, User} from '../../models/user.model';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  error: any;

  personne: User = new User(-1, '', '', '', '', '', false, Roles.Etudiant);

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return {invalid: true};
    }
  }

  createForm() {
    this.registerForm = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      dateDeNaiss: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      grade: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      password: new FormGroup({
          password: new FormControl(undefined, [Validators.required, Validators.minLength(4)]),
          confirmPassword: new FormControl(undefined)
        }, [this.passwordConfirming]
      ),
    });
  }

  get nom() {
    return this.registerForm.get('nom');
  }

  get prenom() {
    return this.registerForm.get('prenom');
  }

  get dateDeNaiss() {
    return this.registerForm.get('dateDeNaiss');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get grade() {
    return this.registerForm.get('grade');
  }

  get role() {
    return this.registerForm.get('role');
  }

  get password() {
    return this.registerForm.get('password.password');
  }

  get confirmPassword() {
    return this.registerForm.get('password.confirmPassword');
  }


  onSubmit() {
    this.loading = true;
    this.personne.nom = this.nom.value;
    this.personne.prenom = this.prenom.value;
    this.personne.dateDeNaiss = this.dateDeNaiss.value;
    this.personne.email = this.email.value;
    this.personne.grade = this.grade.value;
    this.personne.role = this.role.value;
    const pwd = this.password.value;

    this.authService.onRegister({personne: this.personne, pwd: this.password.value})
      .subscribe(data => {
          this.router.navigate(['/']);
        },
        error => {
          console.log('erreur en retour : ', error);
          this.error = error;
          this.loading = false;
        });
  }
}
