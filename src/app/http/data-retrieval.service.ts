import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Skill } from "../../model/skill.model";

@Injectable()
export class DataRetrieval {

    constructor(private http: HttpClient) {
        
    }


    getSkills() {
        return this.http
            .get<Skill[]>("//localhost:8080/skills");
    }

}