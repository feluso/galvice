import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

enum tab { ABOUT, SKILLS, CONTACT }
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public tab = tab;
  public tabToExpand: tab = tab.ABOUT;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  expand(tabToExpand: tab): void {
    this.tabToExpand = tabToExpand;
  }

  routeToParent(): void {
    this.router.navigate(
      [
        {
          outlets: {
            popup: null
          }
        }
      ],

    )
  }

}
