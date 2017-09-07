import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
}
