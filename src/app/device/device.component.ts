import { Component, OnInit } from '@angular/core';
import { DataRetrieval } from '../http/data-retrieval.service';
import { GalStateService } from './gal-state.service';
import { MessageService } from './message.service';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import { Store } from '@ngrx/store';
import * as fromDevice from './device.reducers';
import { Observable } from 'rxjs';
import { Feed, Pet } from './device.actions';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  device$: Observable<fromDevice.State>;
  constructor(private store: Store<fromDevice.State>,
    public stateService: GalStateService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.device$ = this.store.select('device');
    const messages = ['Welcome!', 'More info on the left', 'Feed me on the right', ''];
    this.messageService.subscribeToMessages(messages);

    ($('#device') as any).draggable();
  }

  pet(): void {
    this.store.dispatch(new Pet);
  }

  eat(): void {
    this.store.dispatch(new Feed);
  }

}
