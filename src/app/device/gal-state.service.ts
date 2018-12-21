import { Observable, from, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { State, GalState } from '../../model/gal-state.model';
import { DataRetrieval } from '../http/data-retrieval.service';
import { MessageService } from './message.service';
import { zip } from 'rxjs/operators';

@Injectable()
export class GalStateService {

    idleState: GalState = { name: State.IDLE, imgUrl: 'assets/images/at.gif' };
    pettingState: GalState = { name: State.PETTING, imgUrl: 'assets/images/happy.gif' };
    eatingState: GalState = { name: State.EATING, imgUrl: 'assets/images/eat.gif' };
    state: GalState = this.idleState;
    stateObservable: Observable<GalState>;
    statesQueued: Array<GalState>;

    constructor(private data: DataRetrieval, private messageService: MessageService) { }


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
                this.messageService.subscribeToMessages(messages);
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
                this.messageService.subscribeToMessages(messages);
            }
        );
    }

    sendContact(): void {
        this.statesQueued = new Array();
        this.statesQueued.push(this.pettingState);
        this.statesQueued.push(this.idleState);
        this.delayStates();
        this.subscribeState();
        const messages = ['Thank you', 'We\'ll Stay in touch', ''];
        this.messageService.subscribeToMessages(messages);
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
