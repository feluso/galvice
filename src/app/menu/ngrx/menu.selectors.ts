import * as fromMenu from './menu.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Experience } from '../../../model/experience.model';
export * from './menu.reducers';

export const selectMenu = createFeatureSelector<fromMenu.State>('menu');
export const selectExperience = createSelector(selectMenu, (menu): Experience[] => menu.experiences);
