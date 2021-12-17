import { Component, OnInit } from '@angular/core';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import { Topic } from '../models/topics.model';
import { MyAdapter } from '../adapter/my-adapter';
import { ChatAdapter } from 'ng-chat';
import { ConfigService } from '../home.service';

@Component({
  selector: 'app-search-topic',
  templateUrl: './search-topic.component.html',
  styleUrls: ['./search-topic.component.scss']
})

export class SearchTopicComponent implements OnInit {

  constructor(private listGroups: ConfigService) { }
  
  userId = 999;

  public adapter: ChatAdapter = new MyAdapter(this.listGroups);

  isChange = false;
  faUsers = faUsers;

  topics: Topic[] = [
    {id: 1, name:'Speaking English with foreigner', avt: 'assets/images/image-victor.jpg'},
    {id: 2, name:'Economy', avt: 'assets/images/image-victor.jpg'},
    {id: 5, name:'python programming language', avt: 'assets/images/image-victor.jpg'},
    {id: 3, name:'Big data', avt: 'assets/images/image-victor.jpg'},
    {id: 4, name:'Music', avt: 'assets/images/image-victor.jpg'},
    {id: 6, name:'Learning English with friends', avt: 'assets/images/image-victor.jpg'},
    {id: 8, name:'Food and drink', avt: 'assets/images/image-victor.jpg'},
    {id: 9, name:'java programming language', avt: 'assets/images/image-victor.jpg'},
    {id: 10, name:'Data engineer', avt: 'assets/images/image-victor.jpg'}
  ];

  ngOnInit(): void {
  }

}
