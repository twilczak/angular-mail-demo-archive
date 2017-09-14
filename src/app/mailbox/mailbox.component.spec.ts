import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { MailboxComponent } from './mailbox.component';
import { MailboxControlsComponent } from "./mailbox-controls/mailbox-controls.component";
import { Mailbox } from '../mailbox.service'

describe('MailboxComponent', () => {
  let component: MailboxComponent;
  let fixture: ComponentFixture<MailboxComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ MailboxComponent, MailboxControlsComponent ],
      imports: [ RouterTestingModule ],
      providers: [ Mailbox ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
