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
import { TitleModalComponent } from './common/title-modal/title-modal.component';
import { IntroComponent } from './intro/intro.component';
import { DeviceComponent } from './device/device.component';
import { ExtraInfoComponent } from './menu/extra-info/extra-info.component';
import { PhonePipe } from './common/phone.pipe';

const routes: Routes = [
  { path: 'info', component: InfoComponent, outlet: 'popup' },
  { path: 'extrainfo', component: ExtraInfoComponent, outlet: 'popup' },
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
    ExperienceComponent,
    TitleModalComponent,
    IntroComponent,
    DeviceComponent,
    ExtraInfoComponent,
    PhonePipe
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
