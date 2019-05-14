import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent, tab } from './info.component';
import { AboutTabComponent } from './about-tab/about-tab.component';
import { SkillsTabComponent } from './skills-tab/skills-tab.component';
import { ExperienceComponent } from '../experience/experience.component';
import { TitleModalComponent } from '../../common/title-modal/title-modal.component';
import { SkillItemComponent } from './skills-tab/skill-item/skill-item.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({selector: 'app-title-modal', template: ''})
class TitleModalStubComponent {}

@Component({selector: 'app-skills-tab', template: ''})
class SkillsTabStubComponent {}

@Component({selector: 'app-about-tab', template: ''})
class AboutTabStubComponent {}

@Component({selector: 'app-experience', template: ''})
class ExperienceStubComponent {}

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    const titleSpy = jasmine.createSpyObj('TitleModalComponent', ['navigateTo']);
    TestBed.configureTestingModule({
      declarations: [ InfoComponent, TitleModalStubComponent, SkillsTabStubComponent, AboutTabStubComponent, ExperienceStubComponent
      // {provide: Router, useValue: routerSpy} 
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the title when you change the tab', () => {

    component.expand(tab.ABOUT);
    expect(component.getTitle()).toBe('About', 'its title should be about');
    
  })
});
