import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { Collection } from '@app/interfaces/collection.enum';
import { FirebaseService } from '@app/services/firebase.service';
import { LocalStorageService } from '@app/services/local-storage.service';
import { collection, doc, onSnapshot } from '@firebase/firestore';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit {
  getUsers$ = this.firebaseService.users$;

  constructor(private authService: AuthService, private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.onChangeUserCollection()
  }

  

  signOut() {
    this.authService.SignOut().subscribe();
  }

  getUser() {
    this.authService;
  }
}
