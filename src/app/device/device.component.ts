import { Component, OnInit } from '@angular/core';
import { DataRetrieval } from '../http/data-retrieval.service';
import { GalStateService } from './gal-state.service';
import { MessageService } from './message.service';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import { Store, select } from '@ngrx/store';
import * as fromDevice from './';
import { Observable } from 'rxjs';
import { Feed, Pet, SaveMood, ChangeMessages } from './device.actions';
import { idleState, pettingState, eatingState, GalState } from '../../model/gal-state.model';
import { take, concatMap, concatAll, mergeAll, switchMap, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  states$: Observable<GalState>;
  messages$: Observable<String>;
  eating = eatingState;
  constructor(private store: Store<fromDevice.AppState>, public messageService: MessageService) { }

  ngOnInit(): void {
    this.states$ = this.store.select(fromDevice.selectTimedStates, 6000).pipe(exhaustMap(streamState => streamState));
    this.messages$ = this.store.select(fromDevice.selectTimedMessages, 3000).pipe(exhaustMap(streamMessage => streamMessage));
    this.store.dispatch(new ChangeMessages(['Welcome!', 'More info on the left', 'Feed me on the right', '']));

    ($('#device') as any).draggable();
  }

  pet(): void {
    this.store.dispatch(new Pet);
  }

  eat(): void {
    this.store.dispatch(new Feed);
    this.store.dispatch(new SaveMood('eat'));
  }

}
