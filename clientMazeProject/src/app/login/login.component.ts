import {Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from './user';
import {Observable, of} from 'rxjs';
import {UserService} from './user.service';
import {catchError} from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @Input() users: User[];
  @Input() selectedUser: User;
  @Output() submitinfo = new EventEmitter();
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  users: Observable<User[]>;
  usersdata: User[];
  userlist: FormControl;
  data: any[];
  msg: string;
  constructor(public userService: UserService) {
    this.email = new FormControl('', Validators.compose([Validators.required]));
    this.password = new FormControl('', Validators.compose([Validators.required]));
    this.userlist = new FormControl('', Validators.compose([Validators.required]));
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
      userlist: this.userlist
    });
    this.users = this.userService.getAll().pipe(
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
    this.users.subscribe(user => this.data.push(user['userdata']));
    for (const item of this.data) {
      this.usersdata.push(item);
    }
    this.loginForm.patchValue({
     email: this.email.value,
     password: this.password.value,
      userlist: this.userlist.value
   });
  }
  login(): void {
    if (this.data.find(item => item[0].email === this.email.value && item[0].password === this.password.value))
    {
      alert('successfully logged in!');
    }
    else
    {
      alert('Error - logging in');
    }
  }
 // selectedUser(): void {
 //  this.selectedUser.email = this.loginForm.value.email;
 //  this.selectedUser.password = this.loginForm.value.password;
 //   this.submit.emit(this.selectedUser);
 //  }
}
