export class SocialMedia {
    readonly icon: string;
    readonly platform: string;
    readonly user: string;

    constructor(icon?: string, platform?: string, user?: string) {
        this.icon = icon;
        this.platform = platform;
        this.user = user;
    }


}
