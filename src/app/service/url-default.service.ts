import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlDefaultService {

  urlFileExternal: string = "./assets/dataServer.json";

  constructor() { }

  getUrlApiGame(){
    //3.136.203.179
    return  this.getDataConfig("ipApiGame","http://3.136.203.179:3000");
  }

  getUrlImgGame(){
    return  this.getDataConfig("urlImg","imagen");
  }

  getUrlApiLogin(){
    return  this.getDataConfig("ipApiLogin","http://3.136.203.179:3000");
  }

  getDataConfig(property: string, valueDefault: string){
    let val = localStorage.getItem(property);
    if(val) return val;
    return valueDefault;
  }

  async ExternalFileConfig(){
    let dataConfig = await fetch(this.urlFileExternal);
    if(!dataConfig.ok) return null;
    let dataConfigJson = await dataConfig.json();
    Object.getOwnPropertyNames(dataConfigJson).forEach(name => {
      localStorage.setItem(name, dataConfigJson[name]);
    });
  }
}
