import { Component } from '@angular/core';
import { User } from '@app/interfaces/user.interface';
import { FirebaseService } from '@app/services/firebase.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss'],
})
export class ChatHeaderComponent {
  user$: Observable<User> = this.firebaseService.getUser().pipe(
    map(x => {
      return {
        uid: x?.uid,
        photoURL: x?.photoURL,
        email: x?.email,
        emailVerified: x?.emailVerified,
        displayName: x?.displayName,
        isLoggedIn: true,
      } as User;
    })
  );

  constructor(private firebaseService: FirebaseService) {}
  appTitle = 'Firebase Chat';
}
