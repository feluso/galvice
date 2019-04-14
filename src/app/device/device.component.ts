import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import { Store } from '@ngrx/store';
import * as fromDevice from './ngrx';
import { Observable } from 'rxjs';
import { Feed, Pet, SaveMood, ChangeMessages } from './ngrx/device.actions';
import { eating, GalMood } from '../../model/gal-state.model';
import { exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  moods$: Observable<GalMood>;
  messages$: Observable<String>;
  eating = eating;
  constructor(private store: Store<fromDevice.AppState>) { }

  ngOnInit(): void {
    this.moods$ = this.store.select(fromDevice.selectTimedGalMoods, 6000).pipe(exhaustMap(moodsStream => moodsStream));
    this.messages$ = this.store.select(fromDevice.selectTimedMessages, 3000).pipe(exhaustMap(messagesStream => messagesStream));
    this.store.dispatch(new ChangeMessages(['Welcome!', 'More info on the left', 'Feed me on the right', '']));

    ($('#device') as any).draggable();
  }

  pet(): void {
    this.store.dispatch(new Pet);
    this.store.dispatch(new SaveMood('pet'));
  }

  eat(): void {
    this.store.dispatch(new Feed);
    this.store.dispatch(new SaveMood('eat'));
  }

}
