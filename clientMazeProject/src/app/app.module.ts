import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AchievementsComponent } from './achievements/achievements.component';
import { HomeComponent } from './home/home.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import {DialogService} from "./services/dialog.service";
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    AchievementsComponent,
    HomeComponent,
    TopPlayersComponent,
    GameComponent,
    LoginComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [CanDeactivateGuard, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
