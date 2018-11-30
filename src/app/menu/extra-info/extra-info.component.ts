import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../../../model/social-media.model';
import { Me } from '../../../model/me.model';
import { DataRetrieval } from '../../http/data-retrieval.service';
import { Title } from '../../../model/title.interface';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit, Title {
  closeRoute: any[] = [{outlets: {popup: null}}];
  public me: Me[] = [{ name: 'Test', email: 'Test@email', number: 123456789, description: '' }];
  public socialMedia: SocialMedia[] = [];

  constructor(private data: DataRetrieval) { }

  ngOnInit() {
    this.data.getMe().subscribe(
      (me: Me[]) => {
        this.me = me;
      }
    );
    this.data.getSocialMedia().subscribe(
      (socialMedia) => {
        this.socialMedia = socialMedia;
      }
    );

  }

}
