import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { MyAdapter } from '../adapter/my-adapter';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  userId = 999;

  public adapter: ChatAdapter = new MyAdapter();

  ngOnInit(): void {
  }

}
