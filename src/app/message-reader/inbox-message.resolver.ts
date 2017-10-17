import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { MailService } from '../mail.service';
import { MailMessage } from '../mail-message';

@Injectable()
export class InboxMessageResolver implements Resolve<MailMessage> {

  constructor(private mailService: MailService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MailMessage> {
    return this.mailService.getInboxMessage(route.params.messageId);
  }
}
