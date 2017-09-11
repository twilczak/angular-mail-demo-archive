import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { MailService } from "../mail.service";
import { MailMessage } from "../mail-message";

@Injectable()
export class OutboxMessageResolver implements Resolve<MailMessage> {

  constructor(private mailService: MailService) {}

  resolve(route: ActivatedRouteSnapshot) : Observable<MailMessage> {
    return this.mailService.getOutboxMessage(route.params.messageId);
  }
}