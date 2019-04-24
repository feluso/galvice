import { Component, OnInit } from '@angular/core';
import { Title } from '../../model/title.interface';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import { Store } from '@ngrx/store';
import * as fromMenu from './ngrx';
import { LoadExperience, LoadMeAbout, LoadSocialMedia, LoadSkills } from './ngrx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, Title {
  closeRoute = ['../'];

  constructor(private store: Store<fromMenu.AppState>) { }

  ngOnInit() {
    ($('#modal') as any).draggable();
    this.store.dispatch(new LoadExperience());
    this.store.dispatch(new LoadMeAbout());
    this.store.dispatch(new LoadSocialMedia());
    this.store.dispatch(new LoadSkills());
  }

  download(url): void {
    document.getElementById('pdfDownload').setAttribute('src', url);
  }

}
