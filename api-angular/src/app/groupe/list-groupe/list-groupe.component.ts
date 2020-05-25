import { Component, OnInit } from '@angular/core';
import {GROUPE, Groupe} from '../../models/groupe.model';

@Component({
  selector: 'app-list-groupe',
  templateUrl: './list-groupe.component.html',
  styleUrls: ['./list-groupe.component.css']
})
export class ListGroupeComponent implements OnInit {
  listGroupes: Groupe[] = GROUPE;

  constructor() { }

  ngOnInit() {
  }

}
