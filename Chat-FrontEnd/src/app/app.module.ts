import { MainComponent } from './main/main.component';
import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatRoomComponent } from './chatRoom/chatRoom.component';
import { PusherService } from './_services/pusher.service';
import { ChatService } from './_services/chat.service';

@NgModule({
   declarations: [
      AppComponent,
      ChatRoomComponent,
      MainComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
   ],
   providers: [
      PusherService,
      ChatService,
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
