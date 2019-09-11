import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export type AlertType = 'success' | 'warning' | 'danger'

export interface Alert {
  text: string,
  type: AlertType
}

@Injectable()
export class AlertService {
  alert$ = new Subject<Alert>()

  success(text: string) {
    this.alert$.next({type:'success', text})
  }
  warning(text: string) {
    this.alert$.next({type:'warning', text})
  }
  danger(text: string) {
    this.alert$.next({type:'danger', text})
  }
}
