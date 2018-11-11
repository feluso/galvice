import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './menu/info/info.component';
import { InfoTabComponent } from './menu/info/skills-tab/skills-tab.component';
import { SkillItemComponent } from './menu/info/skills-tab/skill-item/skill-item.component';
import { HttpClientModule } from '@angular/common/http';
import { DataRetrieval } from './http/data-retrieval.service';
import { AboutTabComponent } from './menu/info/about-tab/about-tab.component';
import { ContactTabComponent } from './menu/info/contact-tab/contact-tab.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from './menu/experience/experience.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent, outlet: 'popup' },
  { path: 'experience', component: ExperienceComponent, outlet: 'popup' },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoComponent,
    InfoTabComponent,
    SkillItemComponent,
    AboutTabComponent,
    ContactTabComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataRetrieval],
  bootstrap: [AppComponent]
})
export class AppModule { }
