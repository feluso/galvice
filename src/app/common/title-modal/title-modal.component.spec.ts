import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleModalComponent } from './title-modal.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Title } from '../../../model/title.interface'

@Component({template: `
    <app-title-modal [title]="title"></app-title-modal>
  `})
class TestTitleComponent {
  title: Title =  {title: 'testTitle', closeRoute: [{outlets: {popup: null}}]};
}

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

describe('TitleModalComponent', () => {
  let component: TitleModalComponent;
  let fixture: ComponentFixture<TitleModalComponent>;

  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleModalComponent, TestTitleComponent ],
      providers: [{provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should assign a title', () => {
    const fixtureTest = TestBed.createComponent(TestTitleComponent);
    fixtureTest.detectChanges();
    const renderedTitle = fixtureTest.debugElement.nativeElement.querySelector('h1');
    expect(renderedTitle.textContent).toEqual('testTitle');
  });
});