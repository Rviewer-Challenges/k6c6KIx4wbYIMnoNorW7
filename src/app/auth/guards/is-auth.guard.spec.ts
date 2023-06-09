import { TestBed, waitForAsync } from '@angular/core/testing';
import { IsAuthGuard } from '@app/auth/guards/is-auth.guard';

jest.mock('@angular/fire/auth');

describe('IsAuthGuard', () => {
  let guard: IsAuthGuard;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAuthGuard);
  }));

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
