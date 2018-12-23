import { Component, OnInit } from '@angular/core';
import { Title } from '../../model/title.interface';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, Title {
  closeRoute = ['../'];

  constructor() { }

  ngOnInit() {
    ($('#modal') as any).draggable();
  }

  download(url): void {
    document.getElementById('pdfDownload').setAttribute('src', url);
  }

}
