import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../../model/skill.model';
import { Me } from '../../model/me.model';
import { Observable } from 'rxjs';
import { SocialMedia } from '../../model/social-media.model';
import { map } from 'rxjs/operators';
import { Experience } from '../../model/experience.model';
import { Contact } from '../../model/contact.model';

@Injectable()
export class DataRetrieval {

    constructor(private http: HttpClient) { }


    getSkills(): Observable<Skill[]> {
        return this.http
            .get<({ name, grouping, measurable, levelValue }[])>('//localhost:8080/skills')
            .pipe(
                map(
                    (skillsBackEnd) => {
                        const skills = skillsBackEnd.map(element => {
                            return new Skill(element.name, element.grouping, element.levelValue);
                        });
                        return skills;
                    }
                )
            );
    }

    getMe(): Observable<Me> {
        return this.http
            .get<Me>('//localhost:8080/me');
    }

    getSocialMedia(): Observable<SocialMedia[]> {
        return this.http
            .get<({ icon, platform, platformUrl }[])>('//localhost:8080/social-media').
            pipe(
                map(
                    (socialMediaBackEnd: Array<{ icon, platform, platformUrl }>) => {
                        const socialMediaList = socialMediaBackEnd.map(element => {
                            return new SocialMedia(element.icon, element.platform, element.platformUrl);
                        });
                        return socialMediaList;
                    }
                )
            );
    }

    getExperience(): Observable<Experience[]> {
        return this.http.get<Experience[]>('//localhost:8080/experience');
    }

    saveContact(contact: Contact): void {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
        };
        this.http.post<Contact>('//localhost:8080/contact', contact, httpOptions).subscribe(
        );
    }


    saveState(name: String): Observable<number> {
        return this.http.post<number>('//localhost:8080/state', name);
    }
}
