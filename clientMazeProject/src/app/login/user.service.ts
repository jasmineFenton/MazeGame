import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constants';
import { User } from './user';
import { GenericHttpService} from '../generic-http.service';
@Injectable({
  providedIn: 'root',
})
export class UserService extends GenericHttpService<User>{
  constructor(public http: HttpClient) {
    super(http, `${BASEURL}mazedata`);
  }
}
