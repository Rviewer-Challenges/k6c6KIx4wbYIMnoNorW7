import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from "firebase/compat";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public ngFirebaseAuth: AngularFireAuth,
    public router: Router
  ) { }

   GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  SignOut(): Observable<void> {
    return from(this.ngFirebaseAuth.signOut())
  }

  private AuthLogin(provider: firebase.auth.AuthProvider): Observable<firebase.auth.UserCredential> {
    return from(this.ngFirebaseAuth.signInWithPopup(provider));
  }
}
