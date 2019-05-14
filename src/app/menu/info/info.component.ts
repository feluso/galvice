import { Component, OnInit } from '@angular/core';
import 'jquery-ui/ui/widgets/draggable';
import * as $ from 'jquery';
import { Title } from '../../../model/title.interface';


export enum tab { ABOUT, SKILLS, EXPERIENCE }
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, Title {
  title: String;
  closeRoute = [{outlets: {popup: null}}];
  public tab = tab;
  public tabToExpand: tab = tab.ABOUT;


  constructor() { }

  ngOnInit() {
    this.title = this.getTitle();
    ($('#profile') as any).draggable();
  }

  expand(tabToExpand: tab): void {
    this.tabToExpand = tabToExpand;
    this.title = this.getTitle();
  }

  getTitle(): String {
    switch (this.tabToExpand) {
      case tab.ABOUT:
        return 'About';
      case tab.SKILLS:
        return 'Skills';
      case tab.EXPERIENCE:
        return 'Experience';
    }
  }

}
