export interface GalMood {
    readonly name: States;
    readonly imgUrl: string;
}

export enum States {IDLE, PETTING, EATING}

export const idle: GalMood = { name: States.IDLE, imgUrl: 'assets/images/at.gif' };
export const happy: GalMood = { name: States.PETTING, imgUrl: 'assets/images/happy.gif' };
export const eating: GalMood = { name: States.EATING, imgUrl: 'assets/images/eat.gif' };

