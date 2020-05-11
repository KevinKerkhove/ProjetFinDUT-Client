import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Absence} from '../models/absence.model';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbsencesService {
  private readonly apiUrl = environment.apiUrl;
  private absenceUrl = this.apiUrl + 'absence';

  constructor(private http: HttpClient) {
  }

  // Retourne toutes les players
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


  updateAbsence(absence: Absence): Observable<Absence> {
    const url = `${this.absenceUrl}/${absence.id} `;
    const formData: FormData = new FormData();
    formData.append('motif', absence.motif);
    formData.append('justifie', absence.justifie.toString());
    formData.append('idEtudiant', absence.idEtudiant.toString());
    formData.append('idDocument', absence.idDocument.toString());

    return this.http.post<Observable<Absence>>(url, formData)
      .pipe(
        tap((rep: any) => console.log(rep)),
        map(p => Absence.parse(p.data)),
      );
  }
}
