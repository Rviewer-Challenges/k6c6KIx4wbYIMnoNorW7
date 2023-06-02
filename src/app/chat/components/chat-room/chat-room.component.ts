import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { FirebaseService } from '@app/services/firebase.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit {
  getUsers$ = this.firebaseService.users$;

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.firebaseService.onChangeUserCollection();
  }

  signOut() {
    this.authService.SignOut().subscribe();
  }
}
