
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FileInput} from 'ngx-material-file-input';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = environment.apiUrl;
  private userUrl = this.apiUrl + 'users';

  constructor(private http: HttpClient) {
  }

  // Retourne toutes les users
  getUsers(): Observable<User[]> {
    return this.http.get<Observable<any>>(this.userUrl)
      .pipe(
        tap((rep: any) => console.log(rep.data))
      );
  }


  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id} `;
    return this.http.get<Observable<{}>>(url)
      .pipe(
        tap((rep: any) => console.log(rep))
      );
  }


  updateUser(user: User, pwd: string, file: FileInput): Observable<User> {
    const url = `${this.userUrl}/${user.id} `;
    const formData: FormData = new FormData();
    formData.append('nom', user.nom);
    formData.append('prenom', user.prenom);
    formData.append('dateDeNaiss', user.dateDeNaiss);
    formData.append('email', user.email);
    if (pwd) {
      formData.append('password', pwd);
    }
    if (file) {
      console.log('fichier avatar : ', file.fileNames);
      formData.append('avatar', file.files[0], file.fileNames);
    }
    formData.append('_method', 'PUT');
    return this.http.post<Observable<User>>(url, formData)
      .pipe(
        tap((rep: any) => console.log(rep))
      );
  }
}
