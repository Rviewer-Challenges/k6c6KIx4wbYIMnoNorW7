import { Component, OnInit } from '@angular/core';
import { Auth, AuthService } from '@app/auth/services/auth.service';
import { LocalStorageService } from '@app/services/local-storage.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private localStorage: LocalStorageService
  ) {}

  signOut() {
    this.authService.SignOut().subscribe();
  }

  ngOnInit(): void {
    const user = this.localStorage.get(Auth.User);
    console.log(user);
  }
}
