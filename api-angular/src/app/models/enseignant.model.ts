import {User} from './user.model';

export class Enseignant {
  id: number;
  nom: string;
  prenom: string;
  photo: string;
  grade: string;
  role: string;
  user: User;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, nom: string, prenom: string, photo: string, grade: string, role: string, user: User) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.photo = photo;
    this.grade = grade;
    this.role = role;
    this.user = user;
  }

  static parse(enseignant: any) {
    const user = User.parse(enseignant);
    console.log('User : ', user);
    // tslint:disable-next-line:max-line-length
    return new enseignant(enseignant.id, enseignant.nom, enseignant.prenom, enseignant.photo, enseignant.role, user);
  }
}
