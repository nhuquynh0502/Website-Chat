import { Topic } from './../models/topics.model';
import { Component, Input, OnInit } from '@angular/core';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {faUserCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})

export class TopicComponent implements OnInit {

  constructor() { }

  faEllipsisH = faEllipsisH;
  faUserCheck = faUserCheck;

  @Input() data: Topic 

  ngOnInit(): void {
  }

}
