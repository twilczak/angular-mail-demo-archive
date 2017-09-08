import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { MailboxComponent } from './mailbox/mailbox.component';

import { MailService } from "./mail.service";
import { MailboxControlsComponent } from './mailbox/mailbox-controls/mailbox-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    MailboxComponent,
    MailboxControlsComponent
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
