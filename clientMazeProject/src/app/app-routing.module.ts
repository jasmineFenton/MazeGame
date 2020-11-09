import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {TopPlayersComponent} from './top-players/top-players.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: 'top-players', component: TopPlayersComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
