import { Component, OnInit } from '@angular/core';

import { MailMessage } from "../mail-message";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'message-reader',
  templateUrl: './message-reader.component.html',
  styleUrls: ['./message-reader.component.scss']
})
export class MessageReaderComponent implements OnInit {

  message: MailMessage;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.data.subscribe( (data: { message: MailMessage}) => {
      this.message = data.message;
    });
  }
}
