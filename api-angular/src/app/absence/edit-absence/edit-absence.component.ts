import { Component, OnInit } from '@angular/core';
import {Absence} from '../../models/absence.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AbsencesService} from '../absences.service';

@Component({
  selector: 'app-edit-absence',
  templateUrl: './edit-absence.component.html',
  styleUrls: ['./edit-absence.component.css']
})
export class EditAbsenceComponent implements OnInit {
  loading = false;
  absence: Absence = null;

  constructor(private route: ActivatedRoute, private router: Router, private service: AbsencesService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.service.getAbsence(id).subscribe(absence => {
      this.absence = absence;
      this.loading = false;
    });
  }

  update($event: {absence: Absence}) {
    this.service.updateAbsence($event.absence).subscribe(absence => {
      this.router.navigate(['./absences', this.absence.id]);
    });
  }
}
