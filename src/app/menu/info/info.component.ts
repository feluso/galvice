import { Component, OnInit } from '@angular/core';

enum tab {ABOUT, SKILLS, CONTACT }
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public tab = tab;
  public tabToExpand: tab = tab.ABOUT;


  constructor() { }

  ngOnInit() {
  }

  expand(tabToExpand: tab): void {
    this.tabToExpand = tabToExpand;
  }

}
