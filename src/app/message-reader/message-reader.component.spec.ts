import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MessageReaderComponent } from './message-reader.component';
import { Mailbox } from '../mailbox.service';
import { MailService } from '../mail.service';

class MockMailService extends MailService {
  constructor() {
    super(null);
  }
}

describe('MessageReaderComponent', () => {
  let component: MessageReaderComponent;
  let fixture: ComponentFixture<MessageReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageReaderComponent ],
      imports: [ RouterTestingModule ],
      providers: [ Mailbox, {provide: MailService, useValue: new MockMailService()} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
