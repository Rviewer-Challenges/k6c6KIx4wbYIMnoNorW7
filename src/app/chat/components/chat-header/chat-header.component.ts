import { Component, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, user, User } from '@angular/fire/auth';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss'],
})
export class ChatHeaderComponent {
  appTitle = 'Firebase Chat';

  user$: Observable<User | null> = user(this.auth);
  constructor(@Optional() private auth: Auth) {}
}
