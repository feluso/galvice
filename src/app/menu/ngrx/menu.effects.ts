import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { DataRetrieval, FetchableInfo } from '../../http/data-retrieval.service';
import { EMPTY, throwError, of, Observable } from 'rxjs';
import * as MenuActions from './menu.actions';
import { Action } from '@ngrx/store';

const errorLoading = () => of(new MenuActions.ErrorLoading);
const loadAndExhaust = (actionToListen: string, load$: Observable<any>, actionWhenLoaded: (content) => Action) => {
        return ofType(actionToListen),
        exhaustMap(() => load$.pipe(
            map((loadedContent) => actionWhenLoaded(loadedContent)),
            catchError(errorLoading)
            )
        )
}
@Injectable()
export class MenuEffects {
    constructor(private data: DataRetrieval, private actions$: Actions) {}

    @Effect()
    loadExperience$ = this.actions$.pipe(
        loadAndExhaust(
            MenuActions.ActionTypes.LoadExperience,
            this.data.getExperience(),
            (loadedExperience) => new MenuActions.ExperienceLoaded(loadedExperience)
        )
    );

}
