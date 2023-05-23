import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/services/local-storage.service';
import { Auth } from '@app/auth/services/auth.service';
import firebase from 'firebase/compat';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss'],
})
export class ChatHeaderComponent implements OnInit {
  user: firebase.User;

  constructor(private localStorage: LocalStorageService) {
    this.user = JSON.parse(this.localStorage.get(Auth.User)) as firebase.User;
  }
  appTitle = 'Firebase Chat';

  ngOnInit(): void {
    console.log(this.user);
  }
}
