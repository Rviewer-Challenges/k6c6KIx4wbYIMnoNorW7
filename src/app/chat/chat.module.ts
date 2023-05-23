import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';

const routes: Routes = [{ path: '', component: ChatRoomComponent }];

@NgModule({
  declarations: [ChatRoomComponent, ChatHeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgOptimizedImage],
})
export class ChatModule {}
