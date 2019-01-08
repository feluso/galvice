import { Component, OnInit } from '@angular/core';
import { Me } from '../../../../model/me.model';
import { Data } from '../../../http/data.service';

@Component({
  selector: 'app-about-tab',
  templateUrl: './about-tab.component.html',
  styleUrls: ['./about-tab.component.css']
})
export class AboutTabComponent implements OnInit {

  constructor(public data: Data) { }

  ngOnInit() {
  }


}
