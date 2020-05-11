export class DocumentModel {
  id: number;
  piece: string;
  idAbsence: string;

  constructor(id: number, piece: string, idAbsence: string) {
    this.id = id;
    this.piece = piece;
    this.idAbsence = idAbsence;
  }

  static parse(document: any) {
    return new document(document.id, document.piece, document.idAbsence);
  }
}
