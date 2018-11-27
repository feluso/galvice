import { Component, OnInit } from '@angular/core';
import { Title } from '../../model/title.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, Title {
  closeRoute = ['../'];

  constructor() { }

  ngOnInit() {
  }

  download(url): void {
    document.getElementById('pdfDownload').setAttribute('src', url);
  }

}
