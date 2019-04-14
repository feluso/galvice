import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { DataRetrieval } from '../../http/data-retrieval.service';
import { EMPTY } from 'rxjs';
import * as DeviceActions from './device.actions';

@Injectable()
export class DeviceEffects {
    constructor(private data: DataRetrieval, private actions$: Actions) {}

    @Effect()
    saveTimesChangedState$ = this.actions$.pipe(
        ofType(DeviceActions.ActionTypes.SaveGalAction),
        exhaustMap((action: DeviceActions.SaveMood) => this.data.saveState(action.payload).pipe(
                map(timesChanged =>
                    new DeviceActions.SaveMoodSucceeded(
                            {description: this.changeVerbToPastTense(action.payload), timesActionRealized: timesChanged}
                        ),
                catchError(() => EMPTY)
            )
        )
    )
    );

    changeVerbToPastTense(name: String): String {
        switch (name) {
            case 'eat':
                return 'fed';
            case 'pet':
                return name;
        }
    }

}
