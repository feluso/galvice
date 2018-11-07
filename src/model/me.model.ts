export class Me {
    readonly name: string;
    readonly email: string;
    readonly number: number;
    readonly description: string;

    constructor(name?: string, email?: string, number?: number, description?: string) {
        this.name = name;
        this.email = email;
        this.number = number;
        this.description = description;
    }


}
