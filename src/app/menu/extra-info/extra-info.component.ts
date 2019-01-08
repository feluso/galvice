import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../../../model/social-media.model';
import { Me } from '../../../model/me.model';
import { Title } from '../../../model/title.interface';
import { Router} from '@angular/router';
import { GalStateService } from '../../device/gal-state.service';
import 'jquery-ui/ui/widgets/draggable';
import * as $ from 'jquery';
import { Data } from '../../http/data.service';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit, Title {
  title: String = 'Find me';
  closeRoute: any[] = [{ outlets: { popup: null } }];

  constructor(public data: Data, private router: Router, private stateService: GalStateService) { }

  ngOnInit() {
    ($('#contact') as any).draggable();

  }

  onSave() {
    this.router.navigate(['']);
    this.stateService.sendContact();
  }

}
