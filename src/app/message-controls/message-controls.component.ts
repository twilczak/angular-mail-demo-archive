import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { MailMessage } from "../mail-message";
import { Mailbox } from "../mailbox.service";
import { ActivatedRoute } from "@angular/router";
import { MailService } from "../mail.service";

@Component({
  selector: 'message-controls',
  templateUrl: './message-controls.component.html',
  styleUrls: ['./message-controls.component.scss']
})
export class MessageControlsComponent implements OnInit {

  mailbox: Mailbox;
  message: MailMessage;

  constructor(private route: ActivatedRoute, private mailService: MailService, private router: Router, mailbox: Mailbox) {
    this.mailbox = mailbox;
  }

  ngOnInit() {
    this.route.data.subscribe((data: {message: MailMessage}) => {
      this.message = data.message;
    });
  }

  deleteDisabled() {
    return !! this.message;
  }

  composing() {
    return this.route.snapshot.url[0].path === 'compose';
  }

  delete() {
    let mailbox: string = this.route.snapshot.parent.url[0].path;
    let id : string = this.message.id;

    this.mailService.deleteMessage(mailbox, id).subscribe(() => {
      this.mailbox.delete(id);
      this.router.navigateByUrl(mailbox);
    });
  }

  cancel() {
    let mailbox: string = this.route.snapshot.parent.url[0].path;
    this.router.navigateByUrl(mailbox);
  }
}
