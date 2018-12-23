import { Component, OnInit } from '@angular/core';
import { DataRetrieval } from '../http/data-retrieval.service';
import { GalStateService } from './gal-state.service';
import { MessageService } from './message.service';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';




@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor(private data: DataRetrieval, private stateService: GalStateService, private messageService: MessageService) { }

  ngOnInit(): void {
    const messages = ['Welcome!', 'More info on the left', 'Feed me on the right', ''];
    this.messageService.subscribeToMessages(messages);
    ($('#device') as any).draggable();
  }

  pet(): void {
    this.stateService.pet();
  }



  eat(): void {
    this.stateService.eat();
  }

}
