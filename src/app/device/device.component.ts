import { Component, OnInit } from '@angular/core';
import { Observable, from, timer, Subscription } from 'rxjs';
import { GalState, State } from '../../model/gal-state.model';
import { delay, delayWhen, take, map, zip } from 'rxjs/operators';
import { DataRetrieval } from '../http/data-retrieval.service';
import { GalStateService } from './gal-state.service';
import { MessageService } from './message.service';




@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  title = 'app';

  constructor(private data: DataRetrieval, private stateService: GalStateService, private messageService: MessageService) { }

  ngOnInit(): void {
    const messages = ['Welcome!', 'More info on the left', 'Feed me on the right', ''];
    this.messageService.subscribeToMessages(messages);
  }

  pet(): void {
    this.stateService.pet();
  }



  eat(): void {
    this.stateService.eat();
  }

}
