import { Component, OnInit } from '@angular/core';
import * as fromMenu from '../../ngrx';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Me } from '../../../../model/me.model';

@Component({
  selector: 'app-about-tab',
  templateUrl: './about-tab.component.html',
  styleUrls: ['./about-tab.component.css']
})
export class AboutTabComponent implements OnInit {
  me$: Observable<Me>;

  constructor(public store: Store<fromMenu.AppState>) { }

  ngOnInit() {
    this.me$ = this.store.select(fromMenu.selectMe);
  }


}
