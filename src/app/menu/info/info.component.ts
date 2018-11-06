import { Component, OnInit } from '@angular/core';
import { DataRetrieval } from '../../http/data-retrieval.service';
import { Me } from '../../../model/me.model';

enum tab {ABOUT, SKILLS, CONTACT }
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public tab = tab;
  public tabToExpand: tab = tab.ABOUT;
  public me: Me[] = [new Me('Test', 'Test@email', 123456789)];


  constructor(private data: DataRetrieval) { }

  ngOnInit() {
    this.data.getMe().subscribe(
      (me: Me[]) => {
        this.me = me;
      }
    );
  }

  expand(tabToExpand: tab): void {
    this.tabToExpand = tabToExpand;
  }

}
