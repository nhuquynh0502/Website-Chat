import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { parse } from 'querystring';
// import { Console, log } from 'console';
import { ConfigService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chat Online';

  result = '';
  
  constructor(private route:Router, private listGroups: ConfigService) { 
    listGroups.getConfigResponse().subscribe((res: string) => {this.result = res;})
  }

  login(){
    this.route.navigate(['/login'])
  }

}
