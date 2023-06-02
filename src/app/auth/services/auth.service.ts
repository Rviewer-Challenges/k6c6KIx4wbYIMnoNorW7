import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import { from, map, Observable, tap } from 'rxjs';
import { LocalStorageService } from '@app/services/local-storage.service';
import { Router } from '@angular/router';

export enum Auth {
  User = 'user',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private ngFirebaseAuth: AngularFireAuth,
    private ngLocalStorage: LocalStorageService,
    private router: Router
  ) {}

  SignIn() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  FacebookSignIn() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  SignOut(): Observable<void> {
    return from(this.ngFirebaseAuth.signOut()).pipe(
      tap(() => {
        this.ngLocalStorage.remove(Auth.User);
        this.router.navigate(['login']);
      })
    );
  }

  AuthState() {
    return this.ngFirebaseAuth.authState.pipe(
      map(user => {
        if (user) {
          this.ngLocalStorage.save(Auth.User, JSON.stringify(user));
          return true;
        } else {
          this.ngLocalStorage.remove(Auth.User);
          return false;
        }
      })
    );
  }

  private AuthLogin(
    provider: firebase.auth.AuthProvider
  ): Observable<firebase.auth.UserCredential> {
    return from(this.ngFirebaseAuth.signInWithPopup(provider));
  }
}
