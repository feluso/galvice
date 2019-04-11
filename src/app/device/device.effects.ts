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
    saveTimesAte$ = this.actions$.pipe(
        ofType(DeviceActions.ActionTypes.SaveMood),
        mergeMap((moodName: String) => this.data.saveState(moodName).pipe(
                map(numbersAte => ({type: DeviceActions.ActionTypes.SaveMoodSucceeded, payload: numbersAte})),
                catchError(() => of(EMPTY))
            )
        )
    );
 
}