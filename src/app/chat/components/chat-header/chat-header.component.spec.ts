import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChatHeaderComponent } from '@app/chat/components/chat-header/chat-header.component';

jest.mock('@angular/fire/auth');

describe('ChatHeaderComponent', () => {
  let component: ChatHeaderComponent;
  let fixture: ComponentFixture<ChatHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChatHeaderComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
