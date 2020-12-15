import {BehaviorSubject, Subject} from 'rxjs';
import {User} from './login/user';

export class LoggedService{
  constructor() {  }
  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private messageSource = new  BehaviorSubject(this.editDataDetails);
  private messageSource2 = new  BehaviorSubject(this.editDataDetails);
  private messageSource3 = new  BehaviorSubject(this.editDataDetails);
  currentEmail = this.messageSource.asObservable();
  currentId = this.messageSource2.asObservable();
  currentUsers = this.messageSource3.asObservable();
  changeMessage(email: string, id: string, users: User[]): void {
    this.messageSource.next(email);
    this.messageSource2.next(id);
    this.messageSource3.next(users);
  }
}
