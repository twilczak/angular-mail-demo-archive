import { Component, OnInit } from '@angular/core';

import { MailMessage } from "../mail-message";
import { ActivatedRoute } from "@angular/router";
import { Mailbox } from "../mailbox.service";

@Component({
  selector: 'mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  mailbox: Mailbox;

  constructor( private route: ActivatedRoute, mailbox: Mailbox ) {
    this.mailbox = mailbox;
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.mailbox.name = url[0].path;
    });
    this.route.data.subscribe((data: { messages: MailMessage[] }) => {
      this.mailbox.messages = data.messages;
    });
  }

  inboxActive() : boolean {
    return this.mailbox.name === 'inbox';
  }

  outboxActive() : boolean {
    return this.mailbox.name === 'outbox';
  }
}
