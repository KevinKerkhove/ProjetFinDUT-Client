import { Component, OnInit } from '@angular/core';
import {ABSENCES, Absence} from '../../models/absence.model';

@Component({
  selector: 'app-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.css']
})
export class ListAbsenceComponent implements OnInit {
  listAbsences: Absence[] = ABSENCES;

  constructor() { }

  ngOnInit() {
  }

}
