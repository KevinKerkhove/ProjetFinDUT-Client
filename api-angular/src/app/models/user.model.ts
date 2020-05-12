export class User {
  id: number;
  nom: string;
  prenom: string;
  dateDeNaiss: number;
  email: string;
  avatar: string;
  grade: boolean;
  role: string;
  password: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, nom: string, prenom: string, dateDeNaiss: number, email: string, avatar: string, grade: boolean, role: string, password: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.dateDeNaiss = dateDeNaiss;
    this.email = email;
    this.avatar = avatar;
    this.grade = grade;
    this.role = role;
    this.password = password;
  }
}
