import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTabComponent } from './skills-tab.component';

describe('InfoTabComponent', () => {
  let component: SkillsTabComponent;
  let fixture: ComponentFixture<SkillsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
