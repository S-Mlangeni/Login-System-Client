import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  api_url = "http://127.0.0.1:8000/api";
  search_api_url = "http://127.0.0.1:8000/api/search";
  constructor(private http: HttpClient) { }

  loggingIn(LoginData: any) {
    return this.http.post(this.search_api_url, LoginData);
  } /* "return" is used to check the posting results (success or error), 
  which can then be handled on the component side using the "subscribe" method "*/

  signingup(theData: any) {
    return this.http.post(this.api_url, theData);
  } /* "return" is used to check the posting results (success or error), 
  which can then be handled on the component side using the "subscribe" method "*/
}
