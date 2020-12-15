import {Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../login/user';
import {Observable, of} from 'rxjs';
import {UserService} from '../login/user.service';
import {catchError, filter} from 'rxjs/operators';
import {MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.scss']
})
export class TopPlayersComponent implements OnInit {
  users$: Observable<User[]>;
  // @Input() users: User[];
  usersdata: User[];
  data: any[];
  msg: string;
  constructor(public userService: UserService) {  }

  ngOnInit(): void {
    this.msg = `Users loaded`;
    this.users$ = this.userService.getAll().pipe(
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
          this.msg = `Error: ${error.error.message}`;
        } else {
          this.msg = `Error: ${error.message}`;
        }
        return of([]); // empty array if error
      })
    );
    this.data = [];
    this.users$.subscribe(user => this.data.push(user['userdata']));
    for (const item of this.data) {
      this.usersdata.push(item);
    }
    // function sortByMazes( a, b): number{
    //   if (a.mazecompletions < b.mazecompletions){
    //     return -1;
    //   }
    //   if (a.mazecompletions > b.mazecompletions){
    //     return 1;
    //   }
    //   return 0;
    // }
    // this.data = this.data.sort(sortByMazes);
    // console.log(this.data);
    // this.users$ = this.users$.pipe(map)
  }
}
