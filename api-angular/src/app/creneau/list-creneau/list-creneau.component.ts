import { Component, OnInit } from '@angular/core';
import {CRENEAUX, Creneaux} from '../../models/creneau.model';

@Component({
  selector: 'app-list-creneau',
  templateUrl: './list-creneau.component.html',
  styleUrls: ['./list-creneau.component.css']
})
export class ListCreneauComponent implements OnInit {
  listeCreneau: Creneaux[] = CRENEAUX;

  constructor() { }

  ngOnInit() {
  }

}
