import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Absence} from '../models/absence.model';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {FileInput} from 'ngx-material-file-input';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private readonly apiUrl = environment.apiUrl;
  private absenceUrl = this.apiUrl + 'absences';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getAbsences(): Observable<Absence[]> {
    return this.http.get<Observable<any>>(this.absenceUrl)
      .pipe(
        tap((rep: any) => console.log(rep.data)),
        map(rep => {
          return rep.data.map(x => Absence.parse(x));
        })
      );
  }


  getAbsence(id: number): Observable<Absence> {
    const url = `${this.absenceUrl}/${id} `;
    return this.http.get<Observable<{}>>(url)
      .pipe(
        tap((rep: any) => console.log(rep)),
        map(p => Absence.parse(p.data)),
      );
  }


  updateAbsence(absence: Absence, file: FileInput): Observable<Absence> {
    const url = `${this.absenceUrl}/${absence.id} `;
    const formData: FormData = new FormData();
    formData.append('motif', absence.motif);
    formData.append('justifiee', (absence.justifiee === true ? 'true' : 'false'));
    formData.append('_method', 'PUT');
    if (file) {
      console.log('fichier document : ', file.fileNames);
      formData.append('document', file.files[0], file.fileNames);
    }
    return this.http.post<Observable<Absence>>(url, formData)
      .pipe(
        tap((rep: any) => console.log(rep)),
        map(p => Absence.parse(p.data)),
      );
  }

  supprimerAbsence(absence: Absence): Observable<Absence> {
    const url = `${this.absenceUrl}/${absence.id} `;
    const formData: FormData = new FormData();
    formData.append('_method', 'DELETE');
    return this.http.post<Observable<Absence>>(url, formData)
      .pipe(
        tap((rep: any) => console.log('suppression Ok'))
      );
  }
}
