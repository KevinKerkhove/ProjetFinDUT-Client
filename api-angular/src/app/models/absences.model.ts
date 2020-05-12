export class Absences {
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
}
