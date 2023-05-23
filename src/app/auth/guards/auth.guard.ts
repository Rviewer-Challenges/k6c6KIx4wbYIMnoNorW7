import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '@app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, public router: Router) {}

  canActivate() {
    return this.authService.AuthState().pipe(
      map(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['login']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
