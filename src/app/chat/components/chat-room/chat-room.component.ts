import { Component, OnInit, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import {
  Firestore,
  collectionData,
  collection,
  DocumentData,
} from '@angular/fire/firestore';
import { Collections } from '@app/interfaces/user.interface';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit {
  public users$: Observable<DocumentData[]>;

  constructor(
    @Optional() private firestore: Firestore,
    @Optional() private auth: Auth,
    private router: Router
  ) {}
  ngOnInit(): void {
    const userCollection = collection(this.firestore, Collections.Users);
    this.users$ = collectionData(userCollection);
  }

  async signOut() {
    await this.auth.signOut();
    await this.router.navigate(['/login']);
  }
}
