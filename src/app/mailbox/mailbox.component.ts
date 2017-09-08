import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";

import { MailService } from "../mail.service";
import { MailMessage } from "../mail-message";

@Component({
  selector: 'mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  messages: Observable<MailMessage[]>;
  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.messages = this.mailService.getInboxMessages();
    console.log(this.messages);
  }

}
