import {Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Users } from './users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() users: Users[];
  @Input() selectedUser: Users;
  @Output() submit = new EventEmitter();
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private builder: FormBuilder) {
    this.email = new FormControl('', Validators.compose([Validators.required]));
    this.password = new FormControl('', Validators.compose([Validators.required]));

  }
  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });


    //this.loginForm.patchValue({
     // email: this.selectedUser.email,
     // password: this.selectedUser.password
   // });
  }

 // selectedUser(): void {
  // this.selectedUser.email = this.loginForm.value.email;
 //  this.selectedUser.password = this.loginForm.value.password;
   // this.submit.emit(this.selectedUser);
  //}

}
