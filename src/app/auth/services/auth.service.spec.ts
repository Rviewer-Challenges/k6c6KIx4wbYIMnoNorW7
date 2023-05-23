import { TestBed } from '@angular/core/testing';
import { AuthService } from '@app/auth/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocalStorageService } from '@app/services/local-storage.service';

jest.mock('@angular/fire/compat/auth');
jest.mock('@app/services/local-storage.service');

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AngularFireAuth, LocalStorageService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
