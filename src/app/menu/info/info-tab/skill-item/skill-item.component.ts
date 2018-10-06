import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../../../../model/skill.model';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() skill: Skill;
  maxLevel = 3;
  hasLevels: boolean[] = [];

  constructor() { }

  ngOnInit() {
    for (let level = 0; level <= this.maxLevel; level++) {
      if (level <= this.skill.level) {
        this.hasLevels[level - 1] = true;
      } else {
        this.hasLevels[level - 1] = false;
      }
    }
  }

}
