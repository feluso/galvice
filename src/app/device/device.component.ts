import { Component, OnInit } from '@angular/core';
import { Observable, of, Observer, from, timer, interval, Subscription } from 'rxjs';
import { GalState, State } from '../../model/gal-state.model';
import { delay, delayWhen, take, map, zip } from 'rxjs/operators';
import { DataRetrieval } from '../http/data-retrieval.service';




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
  asyncMessages: Observable<String>;
  asyncSubscription: Subscription;
  state: GalState = this.idleState;

  stateObservable: Observable<GalState>;

  statesQueued: Array<GalState>;

  constructor(private data: DataRetrieval) { }

  ngOnInit(): void {
    const messages = ['Welcome!', 'More info on the left', 'Feed me on the right', ''];
    this.subscribeToMessages(messages);

  }

  private subscribeToMessages(messages: String[]) {
    if (this.asyncSubscription) {
      this.asyncSubscription.unsubscribe();
    }
    this.asyncMessages = from(messages).pipe(zip(timer(0, 3000), (d) => d));
    this.asyncSubscription = this.asyncMessages.subscribe(message => {
      this.actualMessage = message;
    });
  }

  pet(): void {
    this.statesQueued = new Array();
    this.statesQueued.push(this.pettingState);
    this.statesQueued.push(this.idleState);
    this.delayStates();
    this.subscribeState();
    const petObservable = this.data.saveState('pet');
    petObservable.subscribe(
      (amount) => {
        const messages = ['Pet', amount + ' times', ''];
        this.subscribeToMessages(messages);
      }
    );
  }



  eat(): void {
    this.statesQueued = new Array();
    this.statesQueued.push(this.eatingState);
    this.statesQueued.push(this.pettingState);
    this.statesQueued.push(this.idleState);
    this.delayStates();
    this.subscribeState();
    const eatObservable = this.data.saveState('eat');
    eatObservable.subscribe(
      (amount) => {
        const messages = ['Fed', amount + ' times', ''];
        this.subscribeToMessages(messages);
      }
    );
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
