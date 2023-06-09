import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChatHeaderComponent } from '@app/chat/components/chat-header/chat-header.component';
import { ChatRoomComponent } from '@app/chat/components/chat-room/chat-room.component';

jest.mock('@angular/fire/auth');
jest.mock('@angular/fire/firestore');

describe('ChatRoomComponent', () => {
  let component: ChatRoomComponent;
  let fixture: ComponentFixture<ChatRoomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChatRoomComponent, ChatHeaderComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
