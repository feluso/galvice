import * as fromMenu from './menu.reducers';
export * from './menu.reducers';
export * from './menu.actions';
export * from './menu.selectors';

export interface AppState {
    menu: fromMenu.State;
}