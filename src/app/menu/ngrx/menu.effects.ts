import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { DataRetrieval} from '../../http/data-retrieval.service';
import { of, Observable } from 'rxjs';
import * as MenuActions from './menu.actions';
import { Action } from '@ngrx/store';

const errorLoading = () => of(new MenuActions.ErrorLoading);
const loadAndExhaust = <T>(sideEffect$: Observable<T>, actionWhenLoaded: (sideEffectContent: T) => Action) => {
        return exhaustMap(() => sideEffect$.pipe(
            map((sideEffectContent) => actionWhenLoaded(sideEffectContent)),
            catchError(errorLoading)
            )
        );
};

@Injectable()
export class MenuEffects {
    constructor(private data: DataRetrieval, private actions$: Actions) {}

    @Effect()
    loadExperience$ = this.actions$.pipe(ofType(MenuActions.ActionTypes.LoadExperience)).pipe(
        loadAndExhaust(
            this.data.getExperience(),
            (loadedExperience) => new MenuActions.ExperienceLoaded(loadedExperience)
        )
    );

    @Effect()
    loadSocialMedia$ = this.actions$.pipe(ofType(MenuActions.ActionTypes.LoadSocialMedia)).pipe(
        loadAndExhaust(
            this.data.getSocialMedia(),
            (loadedSocialMedia) => new MenuActions.SocialMediaLoaded(loadedSocialMedia)
        )
    );

    @Effect()
    loadAboutMe$ = this.actions$.pipe(ofType(MenuActions.ActionTypes.LoadMeAbout)).pipe(
        loadAndExhaust(
            this.data.getMe(),
            (loadedMe) => new MenuActions.MeAboutLoaded(loadedMe)
        )
    );


    @Effect()
    loadSkills$ = this.actions$.pipe(ofType(MenuActions.ActionTypes.LoadSkills)).pipe(
        loadAndExhaust(
            this.data.getSkills(),
            (loadedSkills) => new MenuActions.SkillsLoaded(loadedSkills)
        )
    );

}
