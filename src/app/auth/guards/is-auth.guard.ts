import { Injectable } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard {
  constructor(private authService: AuthService, public router: Router) {}

  canActivate() {
    return this.authService.AuthState().pipe(
      map(isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate(['chat']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
