import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  levels : String[] = ["Low", "Medium", "High"];

  constructor() { }

  ngOnInit() {
  }

}
