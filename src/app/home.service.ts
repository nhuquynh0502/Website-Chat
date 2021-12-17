import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class ConfigService {


  constructor(private http: HttpClient) { }

  getConfigResponse() {
    return this.http.get<any>("https://chat-online-server.herokuapp.com/api/group/get-list-group");
  }

}