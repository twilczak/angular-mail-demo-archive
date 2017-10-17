import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MailMessage } from '../mail-message';
import { Mailbox } from '../mailbox.service';
import { MailService } from '../mail.service';

@Component({
  selector: 'message-reader',
  templateUrl: './message-reader.component.html',
  styleUrls: ['./message-reader.component.scss']
})
export class MessageReaderComponent implements OnInit {

  message: MailMessage;

  constructor(private route: ActivatedRoute, private mailService: MailService, private mailbox: Mailbox, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe( (data: { message: MailMessage}) => {
      this.message = data.message;
    });
  }

  deleteDisabled() {
    return !this.message;
  }

  deleteMessage() {
    const mailbox: string = this.route.snapshot.parent.url[0].path;
    const id: string = this.message.id;

    this.mailService.deleteMessage(mailbox, id).subscribe(() => {
      this.mailbox.delete(id);
      this.router.navigateByUrl(mailbox);
    });
  }
}
