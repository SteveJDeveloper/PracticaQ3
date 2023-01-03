import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './components/organisms/player-card/player-card.component';
import { PlayerFormComponent } from './components/organisms/player-form/player-form.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { MiTeamComponent } from './components/pages/mi-team/mi-team.component';
import { PlayerFullNamePipe } from './pipes/player/player-full-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    PlayerFormComponent,
    HeaderComponent,
    MiTeamComponent,
    PlayerFullNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
