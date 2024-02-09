// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { FormsService } from '../form/forms.service';

import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { FormsService } from "../form/forms.service";


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate{

//   constructor(public formsrv:FormsService){}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.formsrv.localvalue
//   }
// }

export const AuthGuard:CanActivateFn=(route,state)=>{
  return inject(FormsService).localvalue
}

export const AuthGuard1:CanActivateChildFn=(route,state)=>{
  return inject(FormsService).localvalue1
}
