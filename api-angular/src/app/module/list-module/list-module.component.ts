import { Component, OnInit } from '@angular/core';
import {Modules, MODULES} from '../../models/module.model';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {
  listModule: Modules[] = MODULES;

  constructor() { }

  ngOnInit() {
  }

}
