import * as fromDevice from './device.reducers';
export * from './device.reducers';
export * from './device.actions';
export * from './device.selectors';

export interface AppState {
    device: fromDevice.State;
}