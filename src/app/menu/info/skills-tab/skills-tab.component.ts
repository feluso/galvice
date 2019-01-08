import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../model/skill.model';
import { Data } from '../../../http/data.service';


@Component({
  selector: 'app-skills-tab',
  templateUrl: './skills-tab.component.html',
  styleUrls: ['./skills-tab.component.css']
})
export class InfoTabComponent {

  constructor(public data: Data) { }

}
