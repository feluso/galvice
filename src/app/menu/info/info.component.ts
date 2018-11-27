import { Component, OnInit } from '@angular/core';
import { DataRetrieval } from '../../http/data-retrieval.service';
import { Me } from '../../../model/me.model';
import { Router } from '@angular/router';
import { SocialMedia } from '../../../model/social-media.model';
import { map } from 'rxjs/operators';
import { Title } from '../../../model/title.interface';

enum tab { ABOUT, SKILLS, CONTACT }
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
  public me: Me[] = [{ name: 'Test', email: 'Test@email', number: 123456789, description: '' }];
  public socialMedia: SocialMedia[] = [];


  constructor(private data: DataRetrieval) { }

  ngOnInit() {
    this.data.getMe().subscribe(
      (me: Me[]) => {
        this.me = me;
      }
    );
    this.data.getSocialMedia().subscribe(
      (socialMedia) => {
        this.socialMedia = socialMedia;
      }
    );
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
      case tab.CONTACT:
        return 'Contact';

    }
  }

}
