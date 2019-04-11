import { GalState } from '../../model/gal-state.model';
import * as fromDevice from './device.reducers';
import { Observable, timer, from } from 'rxjs';
import { zip, concatAll } from 'rxjs/operators';
import { createSelector, createFeatureSelector } from '@ngrx/store';
export * from './device.reducers';

export interface AppState {
    device: fromDevice.State;
}

function delay<T>(states: Observable<T>, time: number): Observable<T> {
    return states.pipe(zip(timer(0, time), state => state));
}

export const selectDevice = createFeatureSelector<AppState, fromDevice.State>('device');
export const selectDeviceStates = createSelector(selectDevice, (device): GalState[] => device.states);
export const selectObservableStates = createSelector(selectDeviceStates, (states: GalState[]): Observable<GalState> => from(states));
export const selectTimedStates = createSelector(selectObservableStates, delay);

export const selectMessages = createSelector(selectDevice, (device): String[] => device.messages);
export const selectObservableMessages = createSelector(selectMessages, (messages: String[]): Observable<String> => from(messages));
export const selectTimedMessages = createSelector(selectObservableMessages, delay);

