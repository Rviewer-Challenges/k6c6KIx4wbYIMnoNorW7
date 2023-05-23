import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleLoginComponent } from '@app/auth/components/google-login/google-login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/auth/components/login/login.component';

const routes: Routes = [{ path: '', component: LoginComponent }];
@NgModule({
  declarations: [GoogleLoginComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
