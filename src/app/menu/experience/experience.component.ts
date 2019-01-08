import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../model/experience.model';
import { DataRetrieval } from '../../http/data-retrieval.service';
import { Data } from '../../http/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  constructor(public data: Data) { }
}
