import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {


  constructor(private http: HttpClient) { }

  getConfigResponse() {
    return this.http.get<any>("https://chat-online-server.herokuapp.com/api/group/get-list-group");
  }

  postlogin(username:string, password:string){
    return this.http.post<any>('https://chat-online-server.herokuapp.com/api/auth/login', 
                    {username:username, password:password});
  }

}
