export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  isLoggedIn: boolean;
}

export interface isUserLogged {
  uid: string;
  isLoggedIn: boolean;
}

export enum UserStatus {
  notAvailable = 'N/A',
}

export enum Collections {
  Users = 'users',
}
export enum StorageKeys {
  User = 'user',
}
