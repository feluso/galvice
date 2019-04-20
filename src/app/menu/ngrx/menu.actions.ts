import { Action } from '@ngrx/store';
import { Experience } from '../../../model/experience.model';

export enum ActionTypes {
    LoadExperience = '[Menu] Load experience',
    LoadSkills = '[Menu] Load skills',
    LoadSocialMedia = '[Menu] Load social media',
    LoadMeAbout = '[Menu] Load me information',
    Loaded = '[Menu] Loaded information successfully',
    ExperienceLoaded = '[Menu] Experience loaded successfully',
    ExtraInfoLoaded = '[Menu] Extra Info loaded successfully',
    AboutLoaded = '[Menu] About loaded successfully',
    ErrorLoading = '[Menu] Error loading information',
}

export class ExperienceLoaded implements Action {
    readonly type = ActionTypes.ExperienceLoaded;
    constructor(public payload: Experience[]) {}
}

export class ExtraInfoLoaded implements Action {
    readonly type = ActionTypes.ExtraInfoLoaded;
}

export class AboutLoaded implements Action {
    readonly type = ActionTypes.AboutLoaded;
}

export class ErrorLoading implements Action {
    readonly type = ActionTypes.ErrorLoading;
}

export class LoadExperience implements Action {
    readonly type = ActionTypes.LoadExperience;
}

export class Loaded implements Action{
    readonly type = ActionTypes.LoadExperience;
}

export type Union = ExperienceLoaded | ExtraInfoLoaded | AboutLoaded | ErrorLoading;
