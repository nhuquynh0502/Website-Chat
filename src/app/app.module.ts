import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchTopicComponent } from './search-topic/search-topic.component';
import { TopicComponent } from './topic/topic.component';
import { CurrentGroupComponent } from './current-group/current-group.component';
import { ChatComponent } from './chat/chat.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgChatModule } from 'ng-chat';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchTopicComponent,
    TopicComponent,
    CurrentGroupComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    IvyCarouselModule, 
    NgChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
