import { TestBed } from '@angular/core/testing';

import { AuthlogoutGuard } from './authlogout.guard';

describe('AuthlogoutGuard', () => {
  let guard: AuthlogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthlogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
