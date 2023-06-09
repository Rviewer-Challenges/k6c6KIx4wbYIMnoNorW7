import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import {
  combineLatest,
  EMPTY,
  from,
  of,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import {
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
  doc,
} from '@angular/fire/firestore';
import { Collections, StorageKeys } from '@app/interfaces/user.interface';
import { LocalStorageService } from '@app/services/local-storage.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, OnDestroy {
  authStateSubscription: Subscription;
  authState$ = authState(this.auth);

  constructor(
    @Optional() private firestore: Firestore,
    @Optional() private auth: Auth,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.authStateSubscription = this.authState$
      .pipe(
        switchMap((aUser: User | null) => {
          if (aUser) {
            this.localStorageService.save(StorageKeys.User, aUser.uid);
            return combineLatest([
              from(getDoc(doc(this.firestore, Collections.Users, aUser.uid))),
              of(aUser),
            ]).pipe(
              switchMap(([userDb, aUser]) => {
                if (userDb.exists()) {
                  return updateDoc(
                    doc(this.firestore, Collections.Users, aUser.uid),
                    {
                      isLoggedIn: true,
                    }
                  );
                } else {
                  return from(
                    setDoc(doc(this.firestore, Collections.Users, aUser.uid), {
                      email: aUser.email,
                      displayName: aUser.displayName,
                      photoURL: aUser.photoURL,
                      emailVerified: aUser.email,
                      isLoggedIn: true,
                    })
                  );
                }
              })
            );
          } else {
            const userUid = this.localStorageService.get(StorageKeys.User);
            if (userUid) {
              return from(
                updateDoc(doc(this.firestore, Collections.Users, userUid), {
                  isLoggedIn: false,
                })
              ).pipe(tap(() => this.localStorageService.clear()));
            } else {
              return EMPTY;
            }
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
  }
}
