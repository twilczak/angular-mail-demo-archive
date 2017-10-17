import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessageComposerComponent } from './message-composer.component';
import { Mailbox } from '../mailbox.service';
import { MailService } from '../mail.service';

class MockMailService extends MailService {
  constructor() {
    super(null);
  }
}

describe('MessageComposerComponent', () => {
  let component: MessageComposerComponent;
  let fixture: ComponentFixture<MessageComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, RouterTestingModule ],
      declarations: [ MessageComposerComponent ],
      providers: [ Mailbox, {provide: MailService, useValue: new MockMailService()} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
