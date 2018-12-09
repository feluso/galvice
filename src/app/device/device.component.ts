import { Component, OnInit } from '@angular/core';
import { Observable, of, Observer, from, timer, interval } from 'rxjs';
import { GalState, State } from '../../model/gal-state.model';
import { delay, delayWhen, take, map, zip } from 'rxjs/operators';




@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  title = 'app';
  actualMessage: String = '';
  idleState: GalState = { name: State.IDLE, imgUrl: 'assets/images/at.gif' };
  pettingState: GalState = { name: State.PETTING, imgUrl: 'assets/images/happy.gif' };
  eatingState: GalState = { name: State.EATING, imgUrl: 'assets/images/eat.gif' };

  state: GalState = this.idleState;

  stateObservable: Observable<GalState>;

  statesQueued: Array<GalState>;

  constructor() { }

  ngOnInit(): void {
    const asyncMessages = Observable.create(function (observer) {
      const messages = ['Welcome!', 'More info on the left', 'Feed me on the right', ''];

      for (let index = 0; index < messages.length; index++) {
        const message = messages[index];
        setTimeout(() => {
          observer.next(message);
        }, index * 3000);

      }
    });

    asyncMessages.subscribe(
      message => {
        this.actualMessage = message;
      }
    );

  }

  pet(): void {
    this.statesQueued = new Array();
    this.statesQueued.push(this.pettingState);
    this.statesQueued.push(this.idleState);
    this.delayStates();
    this.subscribeState();
  }



  eat(): void {
    this.statesQueued = new Array();
    this.statesQueued.push(this.eatingState);
    this.statesQueued.push(this.pettingState);
    this.statesQueued.push(this.idleState);
    this.delayStates();
    this.subscribeState();
  }

  private subscribeState() {
    this.stateObservable.subscribe(state => {
      this.state = state;
    }
    );
  }


  private delayStates() {
    this.stateObservable = from(this.statesQueued).pipe(zip(timer(0, 6000), (d) => d));
  }




}
