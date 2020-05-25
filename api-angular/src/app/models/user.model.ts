export interface  User {
  id: number;
  nom: string;
  prenom: string;
  dateDeNaiss: string;
  email: string;
  avatar: string;
  grade: boolean;
  role: string;
  password?: string;
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
    role: 'etudiant',
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
    role: 'enseignant',
    password: null
  }
];


