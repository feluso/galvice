import * as Device from './device.actions';
import { GalState, idleState, pettingState, eatingState } from '../../model/gal-state.model';

export interface State {
    name: String;
    states: GalState[];
    messages: String[];
}

export const selectStates = (state: State): GalState[] => {
    return state.states;
};

export const initialState: State = {
    name: 'Idle',
    states: [idleState],
    messages: []
};

export function deviceReduce(state = initialState, action: Device.Union): State {
    switch (action.type) {
        case Device.ActionTypes.Feed: {
            return {
                ...state,
                name: 'Eating',
                states: [eatingState, pettingState, idleState]
            };
        }

        case Device.ActionTypes.Pet: {
            return {
                ...state,
                name: 'Pet',
                states: [pettingState, idleState]
            };
        }

        case Device.ActionTypes.SaveMoodSucceeded: {
            return {
                ...state,
                name: 'Mood Save succeeded',
                messages: ['Fed', action.payload + ' times', '']
            };
        }

        case Device.ActionTypes.ChangeMessage: {
            return {
                ...state,
                messages: action.payload
            };
        }

        default: return state;
    }

}

