import * as MenuActions from './menu.actions';
import { Experience } from '../../../model/experience.model';

export interface State {
    experiences: Experience[];
}

export const initialState: State = {
    experiences: []
};

export function menuReduce(state = initialState, action: MenuActions.Union): State {
    switch (action.type) {
        case MenuActions.ActionTypes.ExperienceLoaded: {
            return {...state, experiences: action.payload};
        }
        default: return state;
    }

}

