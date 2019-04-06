import * as Device from './device.actions';
import { GalState, idleState, pettingState, eatingState } from '../../model/gal-state.model';

export interface State {
    name: String;
    states: GalState[];
}

export const selectStates = (state: State): GalState[] => {
    return state.states;
};

export const initialState: State = {
    name: 'Idle',
    states: [idleState],
};

export function deviceReduce(state = initialState, action: Device.Union): State {
    switch (action.type) {
        case Device.ActionTypes.Feed: {
            return {
                name: 'Eating',
                states: [eatingState, pettingState, idleState]
            };
        }

        case Device.ActionTypes.Pet: {
            return {
                name: 'Pet',
                states: [pettingState, idleState]
            };
        }

        default: return state;
    }

}

