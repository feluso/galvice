import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../model/experience.model';
import { DataRetrieval } from '../../http/data-retrieval.service';
import { Title } from '../../../model/title.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, Title {
  title: String = 'Experience';


  experiences: Experience[] = [{
    icon: 'https://i.stack.imgur.com/jZhAM.png',
    title: 'Workplace',
    description: 'Test'
  }
];

  constructor(private data: DataRetrieval) { }

  ngOnInit() {
    this.data.getExperience().subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences;
      }
    );
  }

  closeRoute() {
    return [{outlets: {popup: null}}];
  }


}
