export class Skill {
    name: String;
    readonly group: boolean;
    readonly measureable: boolean;
    level: Number;

    constructor(name?: String, group?: boolean, level?: Number) {
        this.name = name;
        this.group = group;
        this.measureable = level > 0 ? true : false;
        this.level = level;
    }


}
