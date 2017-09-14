import { TestBed, inject } from '@angular/core/testing';

import { Mailbox } from './mailbox.service';

describe('MailboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Mailbox]
    });
  });

  it('should be created', inject([Mailbox], (service: Mailbox) => {
    expect(service).toBeTruthy();
  }));
});
