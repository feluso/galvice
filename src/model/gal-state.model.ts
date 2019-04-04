export interface GalState {
    readonly name: States;
    readonly imgUrl: string;
    readonly messages?: String[];

}


export enum States {IDLE, PETTING, EATING}
