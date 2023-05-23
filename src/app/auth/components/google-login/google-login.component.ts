import { Component } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  buttonText = 'Sign in with Google';

  googleAuth() {
    this.authService.SignIn().subscribe({
      next: () => this.router.navigate(['chat']),
    });
  }
}
