import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomComponent } from './chat-room.component';
import { AuthService } from '@app/auth/services/auth.service';
import { LocalStorageService } from '@app/services/local-storage.service';

jest.mock('@app/auth/services/auth.service');

describe('ChatRoomComponent', () => {
  let component: ChatRoomComponent;
  let fixture: ComponentFixture<ChatRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatRoomComponent],
      providers: [AuthService, LocalStorageService],
    });
    fixture = TestBed.createComponent(ChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
