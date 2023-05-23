import { Component } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { LocalStorageService } from '@app/services/local-storage.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent {
  constructor(private authService: AuthService) {}

  signOut() {
    this.authService.SignOut().subscribe();
  }

  getUser() {
    this.authService;
  }
}
