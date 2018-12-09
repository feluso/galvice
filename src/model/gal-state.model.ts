export interface GalState {
    readonly name: State;
    readonly imgUrl: string;
    readonly messages?: String[];

}


export enum State {IDLE, PETTING, EATING}
