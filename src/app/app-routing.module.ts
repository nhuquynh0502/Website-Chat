import { SearchTopicComponent } from './search-topic/search-topic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { CurrentGroupComponent } from './current-group/current-group.component';
import { ChatComponent } from './chat/chat.component';

// import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path:'login', component: LoginComponent},
  { path:'search-topic', component: SearchTopicComponent},
  { path:'chat', component: ChatComponent}
  // { path: 'topic', component: TopicComponent}
  // { path: 'current-group', component: CurrentGroupComponent}
  // { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
