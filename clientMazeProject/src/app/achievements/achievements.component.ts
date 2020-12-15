import { Component, OnInit } from '@angular/core';
import {User} from '../login/user';
import {LoggedService} from '../logged.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  selectedEmail: string;
  users: User[];
  selectedAchievements: string[];
  constructor(public loggedService: LoggedService) { }

  ngOnInit(): void {
    this.loggedService.currentEmail.subscribe(loggedemail =>
      (this.selectedEmail = loggedemail)
    );
    this.loggedService.currentUsers.subscribe(users =>
      (this.users = users)
    );
    this.selectedAchievements = this.users.find(user => user.email === this.selectedEmail)?.achievements;
  }

}
