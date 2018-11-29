import { Component, OnInit } from '@angular/core';

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

    setInterval(() => {
      this.actualMessage = 'Welcome!!!!';
    }, 5000);
  }

}
