import { Action } from '@ngrx/store';

export enum ActionTypes {
    Idle = '[Device] Idle',
    Feed = '[Device] Feed',
    Pet = '[Device] Eat',
    ChangeMessage = '[Device] Change message',
    SaveMood = '[Device] Save times got into mood',
    SaveMoodSucceeded = '[Device] Succesfully Ate'
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

export class ChangeMessages implements Action {
    readonly type = ActionTypes.ChangeMessage;
    public constructor(public payload: String[]) {}
}

export class SaveMood implements Action {
    readonly type = ActionTypes.SaveMood;
    public constructor(public payload: String) {}
}

export class SaveMoodSucceeded implements Action {
    readonly type = ActionTypes.SaveMoodSucceeded;
    public constructor(public payload: Number) {}
}

export type Union = Feed | Pet | Idle | SaveMood | SaveMoodSucceeded | ChangeMessages;

