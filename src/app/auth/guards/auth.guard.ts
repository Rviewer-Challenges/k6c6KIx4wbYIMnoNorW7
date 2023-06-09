import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  authState$ = authState(this.auth);

  constructor(@Optional() private auth: Auth, public router: Router) {}

  canActivate() {
    return this.authState$.pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  }
}
