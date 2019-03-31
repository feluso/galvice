import * as Device from './device.actions';

export interface State {
    name: String;
    image: String;
}

export const initialState: State = {
    name: 'Idle',
    image: 'assets/images/at.gif',
};

export function deviceReduce(state = initialState, action: Device.Union): State {
    switch (action.type) {
        case Device.ActionTypes.Feed: {
            return {...state,
                name: 'Eating',
                image: 'assets/images/eat.gif'
            };
        }

        default: {
            return state;
        }
    }

}

