import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NavbarColorService {

  public changeNavColor = new Subject<any>();
  public changeNavFontColor = new Subject<any>();
}
