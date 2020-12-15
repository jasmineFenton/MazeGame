import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {CanComponentDeactive} from '../utils/interfaces';
// canDeactivate logic from: https://www.concretepage.com/angular-2/angular-candeactivate-guard-example
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactive> {
  canDeactivate(component: CanComponentDeactive,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): any {
    const url: string = state.url;
    // console.log('URL: ' + url);

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
