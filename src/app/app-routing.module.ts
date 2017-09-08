import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MailboxComponent } from "./mailbox/mailbox.component";
import { InboxResolver } from "./mailbox/inbox.resolver";
import { OutboxResolver } from "./mailbox/outbox.resolver";

const routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full'},
  { path: 'inbox', component: MailboxComponent, resolve: { messages: InboxResolver } },
  { path: 'outbox', component: MailboxComponent, resolve: { messages: OutboxResolver } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ InboxResolver, OutboxResolver ]
})
export class AppRoutingModule {}