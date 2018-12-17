import { Component, OnInit } from '@angular/core';
import { DataRetrieval } from '../../http/data-retrieval.service';
import { Me } from '../../../model/me.model';
import { SocialMedia } from '../../../model/social-media.model';
import { Title } from '../../../model/title.interface';

enum tab { ABOUT, SKILLS, EXPERIENCE }
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
