import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Auth, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard {
  authState$ = authState(this.auth);

  constructor(@Optional() private auth: Auth, public router: Router) {}

  canActivate() {
    return this.authState$.pipe(
      map(user => {
        if (user) {
          this.router.navigate(['chat']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
