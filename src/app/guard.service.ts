import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor() { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
    return route.params['usNm'] === 'codekul';
  }
}
