import * as Device from './device.actions';
import { GalMood, idle, happy, eating } from '../../../model/gal-state.model';

export interface State {
    name: String;
    moods: GalMood[];
    messages: String[];
}

export const selectStates = (state: State): GalMood[] => {
    return state.moods;
};

export const initialState: State = {
    name: 'Idle',
    moods: [idle],
    messages: []
};

export function deviceReduce(state = initialState, action: Device.Union): State {
    switch (action.type) {
        case Device.ActionTypes.Feed: {
            return {
                ...state,
                name: 'Eating',
                moods: [eating, happy, idle]
            };
        }

        case Device.ActionTypes.Pet: {
            return {
                ...state,
                name: 'Pet',
                moods: [happy, idle]
            };
        }

        case Device.ActionTypes.SaveGalActionSucceeded: {
            return {
                ...state,
                name: 'Gal Action Save succeeded',
                messages: [action.payload.description, action.payload.timesActionRealized + ' times', '']
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

