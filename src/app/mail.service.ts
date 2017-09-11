import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

import { MailMessage } from "./mail-message";

@Injectable()
export class MailService {
  private hostUrl =  'http://localhost:3000';
  constructor(private http: Http) { }

  getInboxMessages() : Observable<MailMessage[]> {
    const url = `${this.hostUrl}/inbox`;

    return this.http
      .get(url)
      .map(response => response.json() as MailMessage[]);
  };

  getInboxMessage(id) : Observable<MailMessage> {
    const url = `${this.hostUrl}/inbox`;

    return this.http
      .get(url)
      .map(response => response.json().find(message => message.id === id) as MailMessage);
  }

  getOutboxMessages() : Observable<MailMessage[]> {
    const url = `${this.hostUrl}/outbox`;

    return this.http
      .get(url)
      .map(response => response.json() as MailMessage[]);
  }
}
