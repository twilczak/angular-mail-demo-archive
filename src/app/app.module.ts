import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';

import { MailService } from "./mail.service";

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
