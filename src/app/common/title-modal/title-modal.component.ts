import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '../../../model/title.interface';

@Component({
  selector: 'app-title-modal',
  templateUrl: './title-modal.component.html',
  styleUrls: ['./title-modal.component.css']
})
export class TitleModalComponent {
  @Input() title: Title;

  constructor(private router: Router) { }

  navigateTo(): void {
    this.router.navigate(
      this.title.closeRoute
    );
  }
}
