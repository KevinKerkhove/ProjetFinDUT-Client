import { Component, OnInit } from '@angular/core';
import {User, UTILISATEUR} from '../../models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listeUser: User[] = UTILISATEUR;

  constructor() { }

  ngOnInit() {
  }

}
