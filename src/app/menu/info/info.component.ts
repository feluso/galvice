import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public toExpand: Number;

  constructor() { }

  ngOnInit() {
  }

  expand (toExpand: Number) : void {
    this.toExpand = toExpand;
  }

}
