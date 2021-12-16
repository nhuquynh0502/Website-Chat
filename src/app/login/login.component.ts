import { Component, OnInit } from '@angular/core';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faGoogle = faGoogle;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit(): void {
  }
}
