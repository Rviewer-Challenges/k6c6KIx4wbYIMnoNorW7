import { Injectable } from '@angular/core';
import { Collection } from '@app/interfaces/collection.enum';
import { User } from '@app/interfaces/user.interface';
import { collection, addDoc, getDocs, getFirestore, Firestore, updateDoc, doc, onSnapshot  } from "firebase/firestore"; 
import { BehaviorSubject, defer, filter, from, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private _users$ = new BehaviorSubject<User[]>([])
  readonly db: Firestore;

  users$ = this._users$.asObservable();
 
  
  constructor() {
    this.db = getFirestore();
  }

  saveUser(user: User) {
    console.log(user)
    return this.getUser(user.uid).pipe(
      switchMap((isRegisterd) => !isRegisterd ? defer(() => addDoc(collection(this.db, Collection.User), { 
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        isLoggedIn: user.isLoggedIn
      })) : this.updateUser(user))
    )
  }

  getUser(uid: string) {
    return from(getDocs(collection(this.db, Collection.User))).pipe(
      map(x => {
        const data = x.docs.map(j => j.data());
        return data.some(j => j['uid'] === uid)
      })
    )
  }

  updateUser(user: User) {
    return from(updateDoc(doc(this.db, Collection.User, user.uid), {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      isLoggedIn: user.isLoggedIn
    }))
  }

  onChangeUserCollection() {
    const query = collection(this.db, Collection.User);
    onSnapshot(query, onChange => {
      onChange.docs.forEach(j => {
        this._users$.next([
          ...this._users$.getValue(),
          j.data() as User
        ])
      })
    })
  }

}
