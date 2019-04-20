import * as MenuActions from './menu.actions';
import { Experience } from '../../../model/experience.model';
import { SocialMedia } from '../../../model/social-media.model';
import { Skill } from '../../../model/skill.model';
import { Me } from '../../../model/me.model';

export interface State {
    experiences: Experience[];
    socialMedia: SocialMedia[];
    skills: Skill[];
    me: Me;
}

export const initialState: State = {
    experiences: [],
    socialMedia: [],
    skills: [],
    me: {name: '', description: '', email: '', number: -1}
};

export function menuReduce(state = initialState, action: MenuActions.Union): State {
    switch (action.type) {
        case MenuActions.ActionTypes.ExperienceLoaded: {
            return {...state, experiences: action.payload};
        }
        case MenuActions.ActionTypes.SocialMediaLoaded: {
            return {...state, socialMedia: action.payload};
        }
        case MenuActions.ActionTypes.SkillsLoaded: {
            return {...state, skills: action.payload};
        }
        case MenuActions.ActionTypes.MeAboutLoaded: {
            return {...state, me: action.payload};
        }
        default: return state;
    }

}

