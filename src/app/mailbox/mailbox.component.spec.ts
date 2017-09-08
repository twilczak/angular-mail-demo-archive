import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxComponent } from './mailbox.component';

describe('MailComponent', () => {
  let component: MailboxComponent;
  let fixture: ComponentFixture<MailboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailboxComponent ]
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
