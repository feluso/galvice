import { GalState } from '../../model/gal-state.model';
import * as fromDevice from './device.reducers';
import { Observable, timer, from } from 'rxjs';
import { zip, concatAll } from 'rxjs/operators';
import { createSelector, createFeatureSelector } from '@ngrx/store';
export * from './device.reducers';

export interface AppState {
    device: fromDevice.State;
}

function delay(states: Observable<GalState>, time: number): Observable<GalState> {
    return states.pipe(zip(timer(0, time), state => state));
}

export const selectDevice = createFeatureSelector<AppState, fromDevice.State>('device');
export const selectDeviceStates = createSelector(selectDevice, (device): GalState[] => device.states);
export const selectObservableStates = createSelector(selectDeviceStates, (states: GalState[]): Observable<GalState> => from(states));
export const selectTimedStates = createSelector(selectObservableStates, delay);

