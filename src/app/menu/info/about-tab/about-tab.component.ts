import { Component, OnInit } from '@angular/core';
import { DataRetrieval } from '../../../http/data-retrieval.service';
import { Me } from '../../../../model/me.model';

@Component({
  selector: 'app-about-tab',
  templateUrl: './about-tab.component.html',
  styleUrls: ['./about-tab.component.css']
})
export class AboutTabComponent implements OnInit {

  public me: Me = {name: 'Test', email: 'Test@email', number: 123456789, description: ''};

  constructor(private data: DataRetrieval) { }

  ngOnInit() {
    this.data.getMe().subscribe(
      (me: Me) => {
        this.me = me;
      }
    );
  }


}
