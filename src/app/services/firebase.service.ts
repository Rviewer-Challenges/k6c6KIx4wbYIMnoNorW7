import { Injectable } from '@angular/core';
import { Collection } from '@app/interfaces/collection.enum';
import { User } from '@app/interfaces/user.interface';
import {
  collection,
  addDoc,
  getFirestore,
  Firestore,
  updateDoc,
  doc,
  onSnapshot,
  getDoc,
} from 'firebase/firestore';
import { BehaviorSubject, defer, from, map, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private _users$ = new BehaviorSubject<User[]>([]);
  private readonly db: Firestore;
  readonly users$ = this._users$.asObservable();

  constructor(private ngFirebaseAuth: AngularFireAuth) {
    this.db = getFirestore();
  }

  saveUser(user: User) {
    return this.checkUser(user.uid).pipe(
      switchMap(isRegistered =>
        !isRegistered
          ? defer(() =>
              addDoc(collection(this.db, Collection.User), {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
                isLoggedIn: user.isLoggedIn,
              })
            )
          : this.updateUser(user)
      )
    );
  }

  getUser() {
    return this.ngFirebaseAuth.user;
  }

  checkUser(uid: string) {
    return from(getDoc(doc(this.db, Collection.User, uid))).pipe(
      map(x => x.exists())
    );
  }

  updateUser(user: User) {
    return from(
      updateDoc(doc(this.db, Collection.User, user.uid), {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        isLoggedIn: user.isLoggedIn,
      })
    );
  }

  onChangeUserCollection() {
    const query = collection(this.db, Collection.User);
    onSnapshot(query, onChange => {
      onChange.docs.forEach(j => {
        this._users$.next([...this._users$.getValue(), j.data() as User]);
      });
    });
  }
}
