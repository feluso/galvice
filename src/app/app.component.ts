import { Component, OnInit } from '@angular/core';
import { Data } from './http/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private data: Data) {}

  ngOnInit(): void {
  }


}
