import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../model/skill.model';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.css']
})
export class InfoTabComponent implements OnInit {

  skills: Skill[] = [

  ]

  constructor() { }

  ngOnInit() {
  }

}
