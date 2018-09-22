import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../model/skills';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.css']
})
export class InfoTabComponent implements OnInit {

  skills: Skill[] = [
    new Skill("Technical Profficency", true),
    new Skill("Java", false, 3),
    new Skill("SQL", false, 3),
    new Skill("Javascript", false, 2),
    new Skill("Angular", false, 1),
  ]

  constructor() { }

  ngOnInit() {
  }

}
