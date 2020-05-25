export interface Absences {
  id: number;
  motif: string;
  justifiee: boolean;
  document: string;
  idEtudiant: number;
  idCreneau: number;
}

export const ABSENCES = [
  {
    id: 1,
    motif: 'grève de SNCF',
    justifiee: true,
    document: null,
    idEtudiant: 1,
    idCreneau: 1
  }
];
