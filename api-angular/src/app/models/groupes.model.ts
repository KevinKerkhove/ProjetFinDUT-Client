export class Groupe {
  id: number;
  nom: string;
  promo: string;

  constructor(id: number, nom: string, promo: string) {
    this.id = id;
    this.nom = nom;
    this.promo = promo;
  }
}
