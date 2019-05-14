import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../model/skill.model';
import { Data } from '../../../http/data.service';
import { Store } from '@ngrx/store';
import * as fromMenu from '../../ngrx';
import { selectSkills } from '../../ngrx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills-tab',
  templateUrl: './skills-tab.component.html',
  styleUrls: ['./skills-tab.component.css']
})
export class SkillsTabComponent implements OnInit {
  skills: Skill[];

  constructor(public store: Store<fromMenu.AppState>) { }

  ngOnInit(): void {
    this.store.select(selectSkills).subscribe(
      (skills) => this.skills = skills
    );
  }


}
