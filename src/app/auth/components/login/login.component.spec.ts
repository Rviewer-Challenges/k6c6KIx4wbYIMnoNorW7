import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from '@app/auth/components/login/login.component';
import { GoogleLoginComponent } from '@app/auth/components/google-login/google-login.component';
import { AuthService } from '@app/auth/services/auth.service';
import { initializeApp } from 'firebase/app';
import { environment } from '@env/environment';
import { FirebaseService } from '@app/services/firebase.service';

jest.mock('@app/auth/services/auth.service');
jest.mock('@app/services/firebase.service');

initializeApp(environment.firebase);

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, GoogleLoginComponent],
      providers: [AuthService, FirebaseService],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
