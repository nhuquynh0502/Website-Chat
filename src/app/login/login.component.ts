import { LsHelper } from './../helper/lsHelper';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { map } from 'rxjs/operators';
import { ConfigService } from '../home.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faGoogle = faGoogle;
  faFacebook = faFacebook;

  username = '';
  password = '';
  error = '';
  loading = false;

  public token: string; 
  
  constructor(private route:Router, private logins: ConfigService) { }

  ngOnInit(): void {
  }

  clickLogin(){
    this.loading = true;
    this.logins.postlogin(this.username, this.password).subscribe(result => {
      if (result !== 'false')
      {
        LsHelper.saveId(result);

        this.route.navigate(['/search-topic']);
      } 
      else {
        this.error = '*username or password is incorrect!!!';
        this.loading = false;
      }
    })
  }
}

