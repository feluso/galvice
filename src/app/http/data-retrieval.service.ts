import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../../model/skill.model';
import { Me } from '../../model/me.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataRetrieval {

    constructor(private http: HttpClient) {}


    getSkills(): Observable<Skill[]> {
        return this.http
            .get<Skill[]>('//localhost:8080/skills');
    }

    getMe(): Observable<Me[]> {
        return this.http
            .get<Me[]>('//localhost:8080/me');
    }
 }
