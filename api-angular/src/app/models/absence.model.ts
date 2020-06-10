export class Absence {
  id: number;
  motif: string;
  justifiee: boolean;
  document: string;
  idEtudiant: number;
  idCreneau: number;


  constructor(id: number, motif: string, justifiee: boolean, document: string, idEtudiant: number, idCreneau: number) {
    this.id = id;
    this.motif = motif;
    this.justifiee = justifiee;
    this.document = document;
    this.idEtudiant = idEtudiant;
    this.idCreneau = idCreneau;
  }

  static parse(absence: any) {
    return new Absence(absence.id, absence.motif, absence.justifiee, absence.document, absence.idEtudiant, absence.idCreneau);
  }
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
