import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageReaderControlsComponent } from './message-reader-controls.component';

describe('MessageReaderControlsComponent', () => {
  let component: MessageReaderControlsComponent;
  let fixture: ComponentFixture<MessageReaderControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageReaderControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageReaderControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
