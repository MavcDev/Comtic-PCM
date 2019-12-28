import { Component, OnInit, Input } from '@angular/core';
import { ColorService } from './../../service/color.service';
import { fadeBasic } from '../../animation';
import { Router } from "@angular/router";

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  animations: [
    fadeBasic()
  ]
})
export class ResultComponent implements OnInit {

  dataPoints: any = [];
  index: number = 0;
  open: boolean = true;

  audioHome: any;

  @Input()
  set dataPoint(dataPoint: Array<number>){
    this.loadPointData(dataPoint);
  }

  dataPointResult: any = [];
  
  constructor(private colors: ColorService, private router: Router) {
    this.loadAudio();
   }

  ngOnInit() {
  }

  addPoints(){
    this.dataPoints.push(
      {
        ref: 'rosado',
        color: this.colors.colorMain[1],
        title: 'Competencia Tecnológica',
        text: 'Capacidad para seleccionar y utilizar de forma pertinente, responsable y eficiente una variedad de herramientas tecnológicas entendiendo los principios que las rigen, la forma de combinarlas y las licencias que las amparan.',
        img: './assets/result/tecnologico.png',
        imgData: './assets/result/CTecnologica.png',
        point: [
          {x: 236, y: 210},
          {x: 210, y: 130},
          {x: 185, y: 50 }
        ]
      },
      {
        ref: 'morado',
        color: this.colors.colorMain[0],
        title: 'Competencia Comunicativa',
        text: 'Capacidad para expresarse, establecer contacto y relacionarse en espacios virtuales y audiovisuales a través de diversos medios y con el manejo de multiples lenguajes, de manera sincrónica y asincrónica.',
        img: './assets/result/comunicativa.png',
        imgData: './assets/result/CComunicativa.png',
        point: [
          {x: 290, y: 220},
          {x: 350, y: 175},
          {x: 425, y: 120}
        ]
      },
      {
        ref: 'azul',
        color: this.colors.colorMain[4],
        title: 'Competencia Investigativa',
        text: 'Capacidad de utilizar las TIC para la transformación del saber y la generación de nuevos conocimientos.',
        img: './assets/result/investigativa.png',
        imgData: './assets/result/CInvestigativa.png',
        point: [
          {x: 290, y: 280},
          {x: 350, y: 325},
          {x: 425, y: 381}
        ]
      },
      {
        ref: 'verde',
        color: this.colors.colorMain[2],
        title: 'Competencia de Gestión',
        text: 'Capacidad de utilizar las TIC para la transformación del saber y la generación de nuevos conocimientos.',
        img: './assets/result/gestion.png',
        imgData: './assets/result/CGestion.png',
        point: [
          {x: 235, y: 295},
          {x: 210, y: 370},
          {x: 180, y: 455}
        ]
      },
      {
        ref: 'naranja',
        color: this.colors.colorMain[3],
        title: 'Competencia Pedagógica',
        text: 'Capacidad de utilizar las TIC para fortalecer los procesos de enseñanza y aprendizaje, reconociendo alcances y limitaciones de la incorporación de estas tecnologías en la formación integral de los estudiantes y en su propio desarrollo profesional.',
        img: './assets/result/pedagogica.png',
        imgData: './assets/result/CPedagogica.png',
        point: [
          {x: 200, y: 250},
          {x: 120, y: 250},
          {x: 35, y: 250}
        ]
      }
    );
  }

  nextItem(indexChart){
    switch(indexChart){
      case 3: 
        this.index = 0;
      break;

      case 4: 
        this.index = 1;
      break;

      case 0: 
        this.index = 2;
      break;

      case 1: 
        this.index = 3;
      break;

      case 2: 
        this.index = 4;
      break;
    }
  }

  loadPointData(dataPoint: Array<number>){
    this.addPoints();
    for(let i = 0; i < dataPoint.length; i++)
      this.dataPointResult.push( this.dataPoints[i].point[dataPoint[i]] );
  }

  toHome(){
    this.audioHome.play();
    this.router.navigate(['/home']);
  }

  loadAudio(){
    this.audioHome = new Audio('assets/song/btnL2.wav');
  }
}
