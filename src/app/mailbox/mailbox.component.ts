import { Component, OnInit } from '@angular/core';

import { MailMessage } from "../mail-message";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  messages: MailMessage[];

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { messages: MailMessage[] }) => {
      this.messages = data.messages;
    });
  }

  inboxActive() : boolean {
    return this.route.snapshot.url[0].path === 'inbox';
  }

  outboxActive() : boolean {
    return this.route.snapshot.url[0].path === 'outbox';
  }
}
