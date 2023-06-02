import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatHeaderComponent } from '@app/chat/components/chat-header/chat-header.component';
import { FirebaseService } from '@app/services/firebase.service';
import { userMock } from '../../../../__test__/user.mock';
import { of } from 'rxjs';

describe('ChatHeaderComponent', () => {
  let component: ChatHeaderComponent;
  let fixture: ComponentFixture<ChatHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatHeaderComponent],
      providers: [
        {
          provide: FirebaseService,
          useValue: {
            getUser() {
              return of(userMock);
            },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(ChatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
