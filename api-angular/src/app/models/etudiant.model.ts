import {User} from './user.model';

export class Etudiant {
  id: number;
  nom: string;
  prenom: string;
  photo: string;
  ddn: number;
  idGroupe: number;
  role: string;
  user: User;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, nom: string, prenom: string, photo: string, ddn: number, idGroupe: number, role: string, user: User) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.photo = photo;
    this.ddn = ddn
    this.idGroupe = idGroupe;
    this.role = role;
    this.user = user;
  }

  static parse(etudiant: any) {
    const user = User.parse(etudiant);
    console.log('User : ', user);
    // tslint:disable-next-line:max-line-length
    return new etudiant(etudiant.id, etudiant.nom, etudiant.prenom, etudiant.photo, etudiant.role, user);
  }
}
