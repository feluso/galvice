import { Component, OnInit } from '@angular/core';
import { Title } from '../../../model/title.interface';
import { Router} from '@angular/router';
import { GalStateService } from '../../device/gal-state.service';
import 'jquery-ui/ui/widgets/draggable';
import * as $ from 'jquery';
import { Data } from '../../http/data.service';
import { Store } from '@ngrx/store';
import * as fromMenu from '../ngrx';
import { LoadSocialMedia, LoadMeAbout } from '../ngrx';
import { SocialMedia } from '../../../model/social-media.model';
import { Observable } from 'rxjs';
import { Me } from '../../../model/me.model';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit, Title {
  title: String = 'Find me';
  socialMedia$: Observable<SocialMedia[]>;
  phone$: Observable<Number>;
  email$: Observable<String>;
  closeRoute: any[] = [{ outlets: { popup: null } }];

  constructor(public data: Data, private router: Router, private store: Store<fromMenu.AppState>) { }

  ngOnInit() {
    ($('#contact') as any).draggable();
    this.socialMedia$ = this.store.select(fromMenu.selectSocialMedia);
    this.phone$ = this.store.select(fromMenu.selectPhone);
    this.email$ = this.store.select(fromMenu.selectEmail);
  }

  onSave() {
    this.router.navigate(['']);
    // this.stateService.sendContact();
  }

}
