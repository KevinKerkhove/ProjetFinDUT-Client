export class Absence {
  id: number;
  motif: string;
  justifie: boolean;
  idEtudiant: number;
  idDocument: number;

  constructor(id: number, motif: string, justifie: boolean, idEtudiant: number, idDocument: number) {
    this.id = id;
    this.motif = motif;
    this.justifie = justifie;
    this.idEtudiant = idEtudiant;
    this.idDocument = idDocument;
  }
  static parse(absence: any) {
    return new absence(absence.id, absence.motif, absence.justifie, absence.idEtudiant, absence.idDocument);
  }
}
