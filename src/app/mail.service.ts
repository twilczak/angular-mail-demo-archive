import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { MailMessage } from "./mail-message";

@Injectable()
export class MailService {
  private hostUrl =  'http://localhost:3000';
  constructor(private http: Http) { }

  getInboxMessages() : Observable<MailMessage[]> {
    const url = `${this.hostUrl}/inbox`;

    return this.http
      .get(url)
      .map(response => response.json() as MailMessage[])
      .catch(this.handleError);
  };

  getInboxMessage(id: string) : Observable<MailMessage> {
    const url = `${this.hostUrl}/inbox`;

    return this.http
      .get(url)
      .map(response => response.json().find(message => message.id === id) as MailMessage).catch(this.handleError)
      .catch(this.handleError);

  }

  getOutboxMessages() : Observable<MailMessage[]> {
    const url = `${this.hostUrl}/outbox`;

    return this.http
      .get(url)
      .map(response => response.json() as MailMessage[])
      .catch(this.handleError);
  }

  getOutboxMessage(id: string) : Observable<MailMessage> {
    const url = `${this.hostUrl}/outbox`;

    return this.http
      .get(url)
      .map(response => response.json().find(message => message.id === id) as MailMessage)
      .catch(this.handleError);
  }

  deleteMessage(mailbox: string, id: string) {
    const url = `${this.hostUrl}/${mailbox}/${id}`;

    return this.http
      .delete(url)
      .map(res => res)
      .catch(this.handleError);
  }

  sendMessage(message: MailMessage) : Observable<MailMessage> {
    const url = `${this.hostUrl}/outbox`;

    return this.http
      .post(url, message)
      .map(res => {
        let json = res.json();
        console.log(json);
        return json as MailMessage
      })
      // .map(res => console.log(res.json()))
      .catch(this.handleError);
  }

  handleError(e) {
    console.error(e);
    return Observable.throw(new Error(e));
  }
}
