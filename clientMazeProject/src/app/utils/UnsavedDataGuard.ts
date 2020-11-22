import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { HasUnsavedData } from './interfaces';

@Injectable()
export class HasUnsavedDataGuard implements CanDeactivate<any> {
  canDeactivate(component: HasUnsavedData): boolean {
    if (component.hasUnsavedData() && component.hasUnsavedData()) {
      return confirm('You have some unsaved data. Are you sure you want to leave this page?');
    }
    return true;
  }
}
