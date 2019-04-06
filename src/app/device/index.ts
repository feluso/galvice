import { GalState } from '../../model/gal-state.model';
import * as fromDevice from './device.reducers';
import { Observable, timer, from } from 'rxjs';
import { zip } from 'rxjs/operators';
import { createSelector } from '@ngrx/store';
export * from './device.reducers';

export const selectStates = (state: fromDevice.State) => state.states;

function delay(states: GalState[], time: number): Observable<GalState> {
    return from(states).pipe(zip(timer(0, time), (state) => state));
}

export const getTimedStates = createSelector(selectStates, delay);
