import {Observable} from 'rxjs';

export interface HasUnsavedData {
  hasUnsavedData(): boolean;
}

export interface CanComponentDeactive {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
