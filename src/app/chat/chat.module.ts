import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ChatRoomComponent }];

@NgModule({
  declarations: [ChatRoomComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ChatModule {}
