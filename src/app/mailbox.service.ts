import { Injectable } from '@angular/core';
import { MailMessage } from './mail-message';

@Injectable()
export class Mailbox {

  name: string;
  messages: MailMessage[];

  delete(id: string) {
    const i = this.messages.findIndex(el => el.id === id );
    this.messages.splice(i, 1);
  }
}
