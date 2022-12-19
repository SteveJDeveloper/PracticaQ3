import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './components/organisms/player-card/player-card.component';
import { PlayerFormComponent } from './components/organisms/player-form/player-form.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { MiTeamComponent } from './components/pages/mi-team/mi-team.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    PlayerFormComponent,
    HeaderComponent,
    MiTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
