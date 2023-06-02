import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleLoginComponent } from './google-login.component';
import { AuthService } from '@app/auth/services/auth.service';
import { initializeApp } from 'firebase/app';
import { environment } from '@env/environment';
import { FirebaseService } from '@app/services/firebase.service';

jest.mock('@app/auth/services/auth.service');
jest.mock('@app/services/firebase.service');

initializeApp(environment.firebase);

describe('GoogleLoginComponent', () => {
  let component: GoogleLoginComponent;
  let fixture: ComponentFixture<GoogleLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleLoginComponent],
      providers: [AuthService, FirebaseService],
    });
    fixture = TestBed.createComponent(GoogleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
