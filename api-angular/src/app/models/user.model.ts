export class  User {
  id: number;
  nom: string;
  prenom: string;
  dateDeNaiss: string;
  email: string;
  avatar: string;
  grade: boolean;
  role: Roles;
  password?: string;


  constructor(id: number, nom: string, prenom: string, dateDeNaiss: string, email: string,
              avatar: string, grade: boolean, role: Roles, password: string) {
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

  static parse(personne: any) {
    const user = User.parse(personne);
    console.log('User : ', user);
    return new User(personne.id, personne.nom, personne.prenom,
      personne.dateDeNaiss, personne.email, personne.avatar,
      personne.grade, personne.role, personne.password);
  }
}

export enum Roles {
  Etudiant = 'etudiant',
  Administrateur = 'administrateur',
  Secretariat = 'secretariat',
  Enseignant = 'enseignant'
}

export const UTILISATEUR = [
  {
    id: 1,
    nom: 'Duchmol',
    prenom: 'Robert',
    dateDeNaiss: '1999-01-12',
    email: 'duchmol.robert@domain.fr',
    avatar: null,
    grade: false,
    role: Roles.Etudiant,
    password: null
  },
  {
    id: 2,
    nom: 'Soulax',
    prenom: 'Abdel',
    dateDeNaiss: '1980-03-19',
    email: 'Soulax.Abdel@domain.fr',
    avatar: null,
    grade: false,
    role: Roles.Enseignant,
    password: null
  }
];


