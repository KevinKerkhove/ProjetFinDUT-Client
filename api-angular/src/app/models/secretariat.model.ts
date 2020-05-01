import {User} from './user.model';

export class Secretariat {
  id: number;
  nom: string;
  prenom: string;
  photo: string;
  role: string;
  user: User;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, nom: string, prenom: string, photo: string, role: string, user: User) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.photo = photo;
    this.role = role;
    this.user = user;
  }

  static parse(secretariat: any) {
    const user = User.parse(secretariat);
    console.log('User : ', user);
    // tslint:disable-next-line:max-line-length
    return new secretariat(secretariat.id, secretariat.nom, secretariat.prenom, secretariat.photo, secretariat.role,  user);
  }
}
