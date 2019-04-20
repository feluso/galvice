import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../model/experience.model';
import { DataRetrieval, FetchableInfo } from '../../http/data-retrieval.service';
import { Data } from '../../http/data.service';
import { Store } from '@ngrx/store';
import * as fromMenu from '../ngrx';
import { selectMenu, LoadExperience } from '../ngrx';
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
    this.store.dispatch(new LoadExperience());
    this.experiences$ = this.store.select(fromMenu.selectExperience);
  }
}
