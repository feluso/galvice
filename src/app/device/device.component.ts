import { Component, OnInit } from '@angular/core';
import { DataRetrieval } from '../http/data-retrieval.service';
import { GalStateService } from './gal-state.service';
import { MessageService } from './message.service';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import { Store, select } from '@ngrx/store';
import * as fromDevice from './';
import { Observable } from 'rxjs';
import { Feed, Pet } from './device.actions';
import { idleState, pettingState, eatingState, GalState } from '../../model/gal-state.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  states$: Observable<Observable<GalState>>;
  eating = eatingState;
  constructor(private store: Store<fromDevice.State>, public messageService: MessageService) { }

  ngOnInit(): void {
    this.states$ = this.store.pipe(select(fromDevice.getTimedStates, 6000));
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
