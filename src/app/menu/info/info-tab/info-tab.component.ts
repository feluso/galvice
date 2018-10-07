import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../model/skill.model';
import { DataRetrieval } from '../../../http/data-retrieval.service';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.css']
})
export class InfoTabComponent implements OnInit {

  skills: Skill[] = [

  ]

  constructor(private data: DataRetrieval) { }

  ngOnInit() {
    this.data.getSkills().subscribe(
      (skills : Skill[]) => {
        this.skills = skills;
      }
    )

  }

}
