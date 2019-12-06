import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private ipServer: string;

  constructor(private http: HttpClient) { 

  }

  async init(urlServer: string){
    this.ipServer = urlServer;
  }

  async get(url: string, params?: any): Promise<HttpResponse<any>>{
    try{
      const headers = this.getHeader();
      let response = await this.http.get(`${this.ipServer}/${url}`, {headers, params: params, observe: 'response'})
      .pipe(debounceTime(1500))
      .toPromise();
      return response;
    }catch(er){
      console.log(er);
    }
    return null;
  }

  async post(url: string, body: any){
    try{
      const headers = this.getHeader();
      let response = await this.http.post(`${this.ipServer}/${url}`, body, { headers, observe: 'response'})
      .pipe(debounceTime(1500))
      .toPromise();
      return response;
    }catch(er){
      console.log(er);
    }
    return null;
  }

  private getHeader() : HttpHeaders{
    return new HttpHeaders(
      {
        'Content-Type':  'application/json',
        // 'Authorization': this.token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
      }
    );
  }
}
