import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-popup',
  templateUrl: './close-popup.component.html',
  styleUrls: ['./close-popup.component.css']
})
export class ClosePopupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToParent(): void {
    this.router.navigate(
      [
        {
          outlets: {
            popup: null
          }
        }
      ],

    );
  }


}
