import { Component } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { Router } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
import { FirebaseService } from '@app/services/firebase.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent {
  constructor(private authService: AuthService, private router: Router, private firebaseService: FirebaseService) {}

  buttonText = 'Sign in with Google';

  googleAuth() {
    this.authService.SignIn().pipe(
      switchMap(({ user }) => user ? this.firebaseService.saveUser({
        uid: user.uid,
        email: user.email || 'N/A',
        displayName: user.displayName || 'N/A',
        photoURL: user.photoURL || 'N/A',
        emailVerified: user.emailVerified,
        isLoggedIn: true
      }) : EMPTY)
    ).subscribe({
      next: () => this.router.navigate(['chat']),
    });
  }
}
