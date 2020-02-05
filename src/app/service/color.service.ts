import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  colorLineTime: Array<any> = [
    "#dbd879",
    "#bec023",
    "#97991e",
    "#c1d9ea",
    "#85bde4",
    "#4891bb",
    "#c7bad9",
    "#9379aa",
    "#644684",
    "#f2cee9",
    "#b548a5",
    "#ce7cbf",
    "#f4b06c",
    "#f1a54d",
    "#c4640e"
  ]

  colorMain: Array<any> = [
    {colorMain: "#c7bad9", colorSelect: "#b548a5"},
    {colorMain: "#f2cee9", colorSelect: "#b548a5"},
    {colorMain: "#dbd879", colorSelect: "#b548a5"},
    {colorMain: "#f1a54d", colorSelect: "#b548a5"},
    {colorMain: "#85bde4", colorSelect: "#b548a5"}
  ]

  constructor() { }

  /**
   * Colores de la barra de footer
   */
  getListColors(){
    return this.shuffleArray(this.colorLineTime);
  }

  /**
   * Colores del estilo de la tematicas
   */
  getListMainColors(){
    let auxColorMain = this.colorMain.slice();
    return this.shuffleArray(auxColorMain);
  }

  shuffleArray(arra: Array<any>){
    for(let i = arra.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arra[i];
      arra[i] = arra[j];
      arra[j] = temp;
    }
    return arra;
  }
}
