import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../model/experience.model';
import { Store } from '@ngrx/store';
import * as fromMenu from '../ngrx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  experiences$: Observable<Experience[]>;
  

  constructor(public store: Store<fromMenu.AppState>) { }

  ngOnInit(): void {
    this.experiences$ = this.store.select(fromMenu.selectExperience);
  }
}
