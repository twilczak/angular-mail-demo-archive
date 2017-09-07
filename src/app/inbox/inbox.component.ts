import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs/Observable";

import { MailService } from "../mail.service";
import { MailMessage } from "../mail-message";

@Component({
  selector: 'inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  messages: Observable<MailMessage[]>;
  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.messages = this.mailService.getInboxMessages();
    console.log(this.messages);
  }

}
