export interface Creneaux {
  id: number;
  dateDeDebut: string;
  duree: number;
  salle: string;
  idModule: number;
  idGroupe: number;
  idEnseignant: number;
}

export const CRENEAUX = [
  {
    id: 1,
    dateDeDebut: '2020-01-16',
    duree: 90,
    salle: '15E',
    idModule: 1,
    idGroupe: 1,
    idEnseignant: 2,
  }
];
