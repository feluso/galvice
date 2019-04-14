import { GalMood } from '../../../model/gal-state.model';
import * as fromDevice from './device.reducers';
import { Observable, timer, from } from 'rxjs';
import { zip } from 'rxjs/operators';
import { createSelector, createFeatureSelector } from '@ngrx/store';
export * from './device.reducers';

function delay<T>(states: Observable<T>, time: number): Observable<T> {
    return states.pipe(zip(timer(0, time), state => state));
}

export const selectDevice = createFeatureSelector<fromDevice.State>('device');
export const selectGalMoods = createSelector(selectDevice, (device): GalMood[] => device.moods);
export const selectObservableGalMoods = createSelector(selectGalMoods, (states: GalMood[]): Observable<GalMood> => from(states));
export const selectTimedGalMoods = createSelector(selectObservableGalMoods, delay);

export const selectMessages = createSelector(selectDevice, (device): String[] => device.messages);
export const selectObservableMessages = createSelector(selectMessages, (messages: String[]): Observable<String> => from(messages));
export const selectTimedMessages = createSelector(selectObservableMessages, delay);
