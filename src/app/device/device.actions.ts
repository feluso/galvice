import { Action } from '@ngrx/store';

export enum ActionTypes {
    Idle = '[Device] Idle',
    Feed = '[Device] Feed',
    Pet = '[Device] Eat',
}

export class Feed implements Action {
    readonly type = ActionTypes.Feed;
}

export class Pet implements Action {
    readonly type = ActionTypes.Pet;
}

export class Idle implements Action {
    readonly type = ActionTypes.Idle;
}

export type Union = Feed | Pet | Idle;

