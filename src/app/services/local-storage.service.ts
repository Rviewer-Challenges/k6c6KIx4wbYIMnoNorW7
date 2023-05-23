import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly key: string;

  constructor() {
    this.key = environment.applicationSecret;
  }

  public save(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }

  public get(key: string) {
    const data = localStorage.getItem(key) || '';
    return this.decrypt(data);
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(
      CryptoJS.enc.Utf8
    );
  }
}
