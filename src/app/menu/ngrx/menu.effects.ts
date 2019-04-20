import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { DataRetrieval} from '../../http/data-retrieval.service';
import { of, Observable } from 'rxjs';
import * as MenuActions from './menu.actions';
import { Action } from '@ngrx/store';

const errorLoading = () => of(new MenuActions.ErrorLoading);
const loadAndExhaust = <T>(actionToListen: string, sideEffect$: Observable<T>, actionWhenLoaded: (sideEffectContent: T) => Action) => {
        return ofType(actionToListen),
        exhaustMap(() => sideEffect$.pipe(
            map((sideEffectContent) => actionWhenLoaded(sideEffectContent)),
            catchError(errorLoading)
            )
        );
};

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

    @Effect()
    loadSocialMedia$ = this.actions$.pipe(
        loadAndExhaust(
            MenuActions.ActionTypes.LoadSocialMedia,
            this.data.getSocialMedia(),
            (loadedSocialMedia) => new MenuActions.SocialMediaLoaded(loadedSocialMedia)
        )
    );

    @Effect()
    loadAboutMe$ = this.actions$.pipe(
        loadAndExhaust(
            MenuActions.ActionTypes.LoadMeAbout,
            this.data.getMe(),
            (loadedMe) => new MenuActions.MeAboutLoaded(loadedMe)
        )
    );


    @Effect()
    loadSkills$ = this.actions$.pipe(
        loadAndExhaust(
            MenuActions.ActionTypes.LoadSkills,
            this.data.getSkills(),
            (loadedSkills) => new MenuActions.SkillsLoaded(loadedSkills)
        )
    );

}
