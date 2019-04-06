export interface GalState {
    readonly name: States;
    readonly imgUrl: string;
    readonly messages?: String[];

}

export enum States {IDLE, PETTING, EATING}

export const idleState: GalState = { name: States.IDLE, imgUrl: 'assets/images/at.gif' };
export const pettingState: GalState = { name: States.PETTING, imgUrl: 'assets/images/happy.gif' };
export const eatingState: GalState = { name: States.EATING, imgUrl: 'assets/images/eat.gif' };
