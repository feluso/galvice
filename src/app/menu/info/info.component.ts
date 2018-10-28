import { Component, OnInit } from '@angular/core';

enum tab {NONE, INFO, SKILLS, CONTACT }
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public tab = tab;
  public tabToExpand: tab = tab.NONE;


  constructor() { }

  ngOnInit() {
  }

  expand(tabToExpand: tab): void {
    this.tabToExpand = tabToExpand;
  }

}
