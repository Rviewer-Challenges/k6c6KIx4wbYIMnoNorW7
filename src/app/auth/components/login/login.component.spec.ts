import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from '@app/auth/components/login/login.component';
import { GoogleLoginComponent } from '@app/auth/components/google-login/google-login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, GoogleLoginComponent],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
