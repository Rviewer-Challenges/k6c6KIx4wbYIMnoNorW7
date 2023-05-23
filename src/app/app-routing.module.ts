import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/auth/guards/auth.guard';
import { IsAuthGuard } from '@app/auth/guards/is-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  {
    path: 'chat',
    loadChildren: () => import('@app/chat/chat.module').then(m => m.ChatModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('@app/auth/auth.module').then(m => m.AuthModule),
    canActivate: [IsAuthGuard],
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
