export class Creneaux {
  id: number;
  dateDeDebut: number;
  duree: number;
  salle: string;
  idModule: number;
  idGroupe: number;
  idEnseignant: number;

  constructor(id: number, dateDeDebut: number, duree: number, salle: string, idModule: number, idGroupe: number, idEnseignant: number) {
    this.id = id;
    this.dateDeDebut = dateDeDebut;
    this.duree = duree;
    this.salle = salle;
    this.idModule = idModule;
    this.idGroupe = idGroupe;
    this.idEnseignant = idEnseignant;
  }
}
