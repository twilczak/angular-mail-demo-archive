import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { MailboxComponent } from './mailbox/mailbox.component';

import { MailService } from "./mail.service";
import { MailboxControlsComponent } from './mailbox/mailbox-controls/mailbox-controls.component';
import { MessageReaderComponent } from './message-reader/message-reader.component';
import { MessageReaderControlsComponent } from "./message-reader/message-reader-controls/message-reader-controls.component";

@NgModule({
  declarations: [
    AppComponent,
    MailboxComponent,
    MailboxControlsComponent,
    MessageReaderComponent,
    MessageReaderControlsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
