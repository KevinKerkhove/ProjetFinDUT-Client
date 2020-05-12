export class Modules {
  id: number;
  nom: string;
  nbHeuresTotal: number;

  constructor(id: number, nom: string, nbHeuresTotal: number) {
    this.id = id;
    this.nom = nom;
    this.nbHeuresTotal = nbHeuresTotal;
  }
}
