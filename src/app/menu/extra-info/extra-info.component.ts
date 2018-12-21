import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../../../model/social-media.model';
import { Me } from '../../../model/me.model';
import { DataRetrieval } from '../../http/data-retrieval.service';
import { Title } from '../../../model/title.interface';
import { Router } from '@angular/router';
import { GalStateService } from '../../device/gal-state.service';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit, Title {
  title: String = 'Find me';
  closeRoute: any[] = [{outlets: {popup: null}}];
  public me: Me = { name: '', email: '', number: 0, description: '' };
  public socialMedia: SocialMedia[] = [];

  constructor(private data: DataRetrieval, private router: Router, private stateService: GalStateService) { }

  ngOnInit() {
    this.data.getMe().subscribe(
      (me: Me) => {
        this.me = me;
      }
    );
    this.data.getSocialMedia().subscribe(
      (socialMedia) => {
        this.socialMedia = socialMedia;
      }
    );

  }

  onSave() {
    this.router.navigate(['']);
    this.stateService.sendContact();
  }

}
