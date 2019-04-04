import * as Device from './device.actions';
import { GalState, States } from '../../model/gal-state.model';
import { Observable, from, timer } from 'rxjs';
import { map, zip } from 'rxjs/operators';

const idleState: GalState = { name: States.IDLE, imgUrl: 'assets/images/at.gif' };
const pettingState: GalState = { name: States.PETTING, imgUrl: 'assets/images/happy.gif' };
const eatingState: GalState = { name: States.EATING, imgUrl: 'assets/images/eat.gif' };

function delay(states: GalState[]): Observable<GalState> {
    return from(states).pipe(zip(timer(0, 6000), (state, time) => state));
}
export interface State {
    name: String;
    streamState: Observable<GalState>;
}

export const initialState: State = {
    name: 'Idle',
    streamState: delay([idleState]),
};

export function deviceReduce(state = initialState, action: Device.Union): State {
    switch (action.type) {
        case Device.ActionTypes.Feed: {
            return {
                name: 'Eating',
                streamState: delay([eatingState, pettingState, idleState])
            };
        }

        case Device.ActionTypes.Pet: {
            return {
                name: 'Pet',
                streamState: delay([pettingState, idleState])
            };
        }

        default: return state;
    }

}

