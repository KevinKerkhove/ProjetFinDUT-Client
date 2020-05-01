export class User {
  id: number;
  nom: string;
  prenom: string;
  photo: string;
  role: string;
  accessToken: string;
  tokenType: string;
  expiresIn: number;

  constructor(id: number, nom: string, prenom: string, photo: string, role: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.photo = photo;
    this.role = role;
  }
  static parse(usr: any) {
    return new User(usr.user.id, usr.user.nom, usr.prenom, usr.photo, usr.user.role);
  }



}
