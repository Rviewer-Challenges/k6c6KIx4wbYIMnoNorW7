import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@app/auth/services/auth.service';
import { LocalStorageService } from '@app/services/local-storage.service';
import { ChatHeaderComponent } from '@app/chat/components/chat-header/chat-header.component';
import { initializeApp } from 'firebase/app';
import { environment } from '@env/environment';
import { ChatRoomComponent } from '@app/chat/components/chat-room/chat-room.component';
import { FirebaseService } from '@app/services/firebase.service';
import { of } from 'rxjs';
import { userMock } from '../../../../__test__/user.mock';

jest.mock('@app/auth/services/auth.service');

initializeApp(environment.firebase);

describe('ChatRoomComponent', () => {
  let component: ChatRoomComponent;
  let fixture: ComponentFixture<ChatRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatRoomComponent, ChatHeaderComponent],
      providers: [
        AuthService,
        {
          provide: FirebaseService,
          useValue: {
            getUser() {
              return of(userMock);
            },
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChangeUserCollection() {},
          },
        },
      ],
    });
    fixture = TestBed.createComponent(ChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
