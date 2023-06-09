import { TestBed, waitForAsync } from '@angular/core/testing';
import { AuthGuard } from '@app/auth/guards/auth.guard';

jest.mock('@angular/fire/auth');

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  }));

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
