import { Injectable } from '@angular/core';
import { Skill } from '../../model/skill.model';
import { DataRetrieval } from './data-retrieval.service';
import { Me } from '../../model/me.model';
import { SocialMedia } from '../../model/social-media.model';
import { Experience } from '../../model/experience.model';

@Injectable()
export class Data {

    skills: Skill[] = [];
    me: Me = {name: '', email: '', number: -1, description: ''};
    socialMedia: SocialMedia[] = [];
    experiences: Experience[] = [];
    constructor(private data: DataRetrieval) { }

    fetch(): any {
        this.getSkills();
        this.getMe();
        this.getSocialMedia();
        this.getExperience();
    }


    getSkills(): Skill[] {
        if (this.skills.length === 0) {
            this.data.getSkills().subscribe(
                (skills: Skill[]) => {
                    this.skills = skills;
                }
            );
        }
        return this.skills;
    }


    getMe(): Me {
        if (this.me.name === '') {
            this.data.getMe().subscribe(
                (me: Me) => {
                    this.me = me;
                }
            );
        }
        return this.me;
    }

    getSocialMedia(): SocialMedia[] {
        if (this.socialMedia.length === 0) {
            this.data.getSocialMedia().subscribe(
                (socialMedia) => {
                    this.socialMedia = socialMedia;
                }
            );
        }
        return this.socialMedia;

    }

    getExperience(): Experience[] {
        if (this.experiences.length === 0) {
            this.data.getExperience().subscribe(
                (experiences: Experience[]) => {
                    this.experiences = experiences;
                }
            );
        }
        return this.experiences;
    }
}
