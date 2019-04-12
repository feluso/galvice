import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataRetrieval } from '../http/data-retrieval.service';
import { of, EMPTY } from 'rxjs';
import * as DeviceActions from './device.actions';

@Injectable()
export class DeviceEffects {
    constructor(private data: DataRetrieval, private actions$: Actions) {}


    @Effect()
    saveTimesChangedState$ = this.actions$.pipe(
        ofType(DeviceActions.ActionTypes.SaveMood),
        mergeMap((action: DeviceActions.SaveMood) => this.data.saveState(action.payload).pipe(
                map(numbersAte => new DeviceActions.SaveMoodSucceeded(numbersAte)),
                catchError(() => EMPTY)
            )
        )
    );
 
}