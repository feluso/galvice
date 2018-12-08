import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

enum state {IDLE, PET, EATING}

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  title = 'app';
  actualMessage: String = '';
  stateImage: String = 'assets/images/at.gif';
  public state: state = state.IDLE;

  constructor() { }

  ngOnInit(): void {
    const asyncMessages = Observable.create(function (observer) {
      const messages = ['Welcome!', 'More info on the left', 'Feed me on the right', ''];

      for (let index = 0; index < messages.length; index++) {
        const message = messages[index];
        setTimeout(() => {
          observer.next(message);
        }, index * 3000);

      }
    });

    asyncMessages.subscribe(
      message => {
        this.actualMessage = message;
      }
    );
  }


  pet(): void {
    this.state = state.PET;
    this.stateImage = 'assets/images/happy.gif';
    setTimeout(() => {
      this.stateImage = 'assets/images/at.gif';
      this.state = state.IDLE;
    }, 6000);
  }




}
