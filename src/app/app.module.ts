import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './menu/info/info.component';

const routes : Routes = [
  { path: 'info', component: InfoComponent, outlet: 'popup' }, 
  { path: 'menu', component: MenuComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
