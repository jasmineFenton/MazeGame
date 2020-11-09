import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AchievementsComponent} from './achievements/achievements.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
