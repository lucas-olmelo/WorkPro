import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  private authenticationChangedSubject = new Subject<void>();

  authenticationChanged$ = this.authenticationChangedSubject.asObservable();

  notifyAuthenticationChanged(): void {
    this.authenticationChangedSubject.next();
  }
}
