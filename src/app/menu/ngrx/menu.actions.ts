import { Action } from '@ngrx/store';
import { Experience } from '../../../model/experience.model';
import { SocialMedia } from '../../../model/social-media.model';
import { Skill } from '../../../model/skill.model';
import { Me } from '../../../model/me.model';

export enum ActionTypes {
    LoadExperience = '[Menu] Load experience',
    LoadSkills = '[Menu] Load skills',
    LoadSocialMedia = '[Menu] Load social media',
    LoadMeAbout = '[Menu] Load me information',
    ExperienceLoaded = '[Menu] Experience loaded successfully',
    SocialMediaLoaded = '[Menu] Social Media loaded successfully',
    SkillsLoaded = '[Menu] Skills loaded successfully',
    MeAboutLoaded = '[Menu] About loaded successfully',
    ErrorLoading = '[Menu] Error loading information',
}

export class ExperienceLoaded implements Action {
    readonly type = ActionTypes.ExperienceLoaded;
    constructor(public payload: Experience[]) {}
}

export class SocialMediaLoaded implements Action {
    readonly type = ActionTypes.SocialMediaLoaded;
    constructor(public payload: SocialMedia[]) {}
}

export class SkillsLoaded implements Action {
    readonly type = ActionTypes.SkillsLoaded;
    constructor(public payload: Skill[]) {}
}

export class MeAboutLoaded implements Action {
    readonly type = ActionTypes.MeAboutLoaded;
    constructor(public payload: Me) {}
}

export class ErrorLoading implements Action {
    readonly type = ActionTypes.ErrorLoading;
}

export class LoadExperience implements Action {
    readonly type = ActionTypes.LoadExperience;
}

export class LoadSocialMedia implements Action {
    readonly type = ActionTypes.LoadSocialMedia;
}

export class LoadMeAbout implements Action {
    readonly type = ActionTypes.LoadMeAbout;
}

export class LoadSkills implements Action {
    readonly type = ActionTypes.LoadSkills;
}

export type Union = ExperienceLoaded | SocialMediaLoaded | SkillsLoaded | MeAboutLoaded | ErrorLoading;
