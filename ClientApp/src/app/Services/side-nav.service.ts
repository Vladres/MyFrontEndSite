
import { Injectable, EventEmitter } from '@angular/core';

// import { DrawerComponent } from './drawer/drawer.component';


import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SideNavService {
 public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { } 
 

  public toggle() {
    return this.sideNavToggleSubject.next(null);
  } 
}
