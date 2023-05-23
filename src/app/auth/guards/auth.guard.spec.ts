import { TestBed } from '@angular/core/testing';
import { AuthGuard } from '@app/auth/guards/auth.guard';
import { AuthService } from '@app/auth/services/auth.service';

jest.mock('@app/auth/services/auth.service');

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
