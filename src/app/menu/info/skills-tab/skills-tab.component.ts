import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../model/skill.model';
import { DataRetrieval } from '../../../http/data-retrieval.service';

@Component({
  selector: 'app-skills-tab',
  templateUrl: './skills-tab.component.html',
  styleUrls: ['./skills-tab.component.css']
})
export class InfoTabComponent implements OnInit {

  skills: Skill[] = [];

  constructor(private data: DataRetrieval) { }

  ngOnInit() {
    this.data.getSkills().subscribe(
      (skills: Skill[]) => {
        this.skills = skills;
      }
    );

  }

}
