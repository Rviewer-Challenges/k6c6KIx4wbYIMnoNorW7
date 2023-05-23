import { TestBed } from '@angular/core/testing';
import { IsAuthGuard } from '@app/auth/guards/is-auth.guard';
import { AuthService } from '@app/auth/services/auth.service';

jest.mock('@app/auth/services/auth.service');

describe('IsAuthGuard', () => {
  let guard: IsAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
    guard = TestBed.inject(IsAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
