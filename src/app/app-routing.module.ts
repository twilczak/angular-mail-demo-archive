import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MailboxComponent } from "./mailbox/mailbox.component";
import { MessageReaderComponent } from "./message-reader/message-reader.component";
import { InboxResolver } from "./mailbox/inbox.resolver";
import { InboxMessageResolver } from "./message-reader/inbox-message.resolver";
import { OutboxResolver } from "./mailbox/outbox.resolver";
import { OutboxMessageResolver} from "./message-reader/outbox-message.resolver";

const routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full'},
  { path: 'inbox', component: MailboxComponent, resolve: { messages: InboxResolver },
    children: [
      { path: 'view', redirectTo: '/inbox', pathMatch: 'full'},
      { path: 'view/:messageId', component: MessageReaderComponent, resolve: { message: InboxMessageResolver } }
    ]
  },
  { path: 'outbox', component: MailboxComponent, resolve: { messages: OutboxResolver },
    children: [
      { path: 'view', redirectTo: '/outbox', pathMatch: 'full'},
      { path: 'view/:messageId', component: MessageReaderComponent, resolve: { message: OutboxMessageResolver} }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ InboxResolver, InboxMessageResolver, OutboxResolver, OutboxMessageResolver ]
})
export class AppRoutingModule {}