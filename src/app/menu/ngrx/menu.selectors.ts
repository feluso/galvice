import * as fromMenu from './menu.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Experience } from '../../../model/experience.model';
import { SocialMedia } from '../../../model/social-media.model';
import { Skill } from '../../../model/skill.model';
import { Me } from '../../../model/me.model';

export const selectMenu = createFeatureSelector<fromMenu.State>('menu');
export const selectExperience = createSelector(selectMenu, (menu): Experience[] => menu.experiences);
export const selectSocialMedia = createSelector(selectMenu, (menu): SocialMedia[] => menu.socialMedia);
export const selectSkills = createSelector(selectMenu, (menu): Skill[] => menu.skills);
export const selectMe = createSelector(selectMenu, (menu): Me => menu.me);
export const selectPhone = createSelector(selectMe, (me): Number => me.number);
export const selectEmail = createSelector(selectMe, (me): String => me.email);
