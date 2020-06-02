import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model';
import {map, tap} from 'rxjs/operators';

// Setup headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Accept: 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;
  private registerUrl = this.apiUrl + 'register';
  private loginUrl = this.apiUrl + 'login';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  onLogin(user: any): Observable<{} | User> {
    const request = JSON.stringify({email: user.email, password: user.password});
    const url = this.loginUrl;
    return this.http.post(this.loginUrl, request, httpOptions)
      .pipe(
        map((data: any) => {
          const personne = User.parse(data.data.personne);
          this.storeToken(data, personne);
          return personne;
        }));
  }

  storeToken(data: any, personne: User) {
    personne = data.data.token;
    localStorage.setItem('currentUser', JSON.stringify(personne));
    console.log('Personne : ', personne);
    this.currentUserSubject.next(personne);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  onRegister(valeur: { personne: User, pwd: string }) {
    const request = JSON.stringify({
      nom: valeur.personne.nom,
      prenom: valeur.personne.prenom,
      dateDeNaiss: valeur.personne.dateDeNaiss,
      email: valeur.personne.email,
      role: valeur.personne.role,
      grade: valeur.personne.grade,
      password: valeur.personne.password
    });

    return this.http.post(this.registerUrl, request, httpOptions)
      .pipe(
        map((data: any) => {
          const personne = User.parse(data.data.personne);
          this.storeToken(data, personne);
          return personne;
        }));
  }
}
