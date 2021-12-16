import { Component, OnInit, Input } from '@angular/core';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import { Topic } from '../models/topics.model';

@Component({
  selector: 'app-current-group',
  templateUrl: './current-group.component.html',
  styleUrls: ['./current-group.component.scss']
})
export class CurrentGroupComponent implements OnInit {

  constructor() { }

  faEllipsisH = faEllipsisH;
  faPhone = faPhone;

  @Input() data: Topic 

  ngOnInit(): void {
  }

}
