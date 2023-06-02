import { TestBed } from '@angular/core/testing';
import { FirebaseService } from './firebase.service';
import { initializeApp } from 'firebase/app';
import { environment } from '@env/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

jest.mock('@angular/fire/compat/auth');

initializeApp(environment.firebase);

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFireAuth],
    });
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
