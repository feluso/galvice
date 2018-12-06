import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  title = 'app';
  actualMessage: String = '';

  constructor() { }

  ngOnInit(): void {
    const asyncMessages = Observable.create(function (observer) {
      const messages = ['Welcome!', 'More info on the left', 'Feed me on the right'];

      for (let index = 0; index < messages.length; index++) {
        const message = messages[index];
        setTimeout(() => {
          observer.next(message);
        }, index * 1000);

      }
    });

    asyncMessages.subscribe(
      message => {
        this.actualMessage = message;
      }
    );
  }

}
