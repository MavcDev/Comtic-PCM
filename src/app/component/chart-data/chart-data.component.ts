import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.css']
})
export class ChartDataComponent implements AfterViewInit  {

  subCountTime: any;

  cx: CanvasRenderingContext2D;
  dataPoints: any = [];
  dataColor: Array<string> = [
    "#4891bb",
    "#97991e",
    "#c4640e",
    "#b548a5",
    "#644684"
  ];

  countAux: number = 0;
  angle: number = 17;
  index: number = 3;

  @ViewChild('canvas', {static: false}) public canvas: ElementRef;
  
  @Input()
  set dataPoint(data:any){
    this.dataPoints = data;
  }

  @Output() clickChartNext = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = 500;
    canvasEl.height = 500;
    canvasEl.addEventListener("touchend", this.clickChart.bind(this), false);
    canvasEl.addEventListener("click", this.clickChart.bind(this), false);
    this.draw();
  }

  clickChart(event){
    if(this.subCountTime) return;
    const countTime = interval(13);
    this.subCountTime = countTime.subscribe((n)=>{
      this.angle = -1;
      this.countAux++;
      this.draw(); 

      if(this.countAux >= 72){
        this.countAux = 0;
        this.subCountTime.unsubscribe();
        this.subCountTime =  undefined;
      }

    });
    
    this.index++;
    this.index = this.index % 5;
    this.clickChartNext.emit(this.index);
    
  }

  drawPoints(){
    this.drawLine(this.dataPoints);
    this.drawPoint(this.dataPoints);
  }

  draw(){
    this.cx.clearRect(0, 0, 500, 500);

    this.cx.translate(250, 250);
    this.cx.rotate(this.angle * Math.PI / 180);
    this.cx.translate(-250, -250);

    var ini = 0;
    var end = 72;
    this.dataColor.forEach(color => {
      this.cx.beginPath();
      this.cx.moveTo(500/2, 500/2);
      this.cx.arc(500/2, 500/2, 250, this.getDegrees(ini), this.getDegrees(end), false);
      this.cx.closePath();
      this.cx.fillStyle = color;
      this.cx.fill();
      ini = end;
      end += 72;
    });

    this.cx.beginPath();
    this.cx.arc(500/2, 500/2, 167, 0, 2 * Math.PI, false);
    this.cx.closePath();
    this.cx.fillStyle = "#ffffff59";
    this.cx.fill();

    this.cx.beginPath();
    this.cx.arc(500/2, 500/2, 83, 0, 2 * Math.PI, false);
    this.cx.closePath();
    this.cx.fillStyle = "#ffffff59";
    this.cx.fill();

    this.cx.beginPath();
    this.cx.arc(500/2, 500/2, 15, 0, 2 * Math.PI, false);
    this.cx.fillStyle = "#b2b2b2";
    this.cx.lineWidth = 5;
    this.cx.strokeStyle = '#717171';
    this.cx.stroke();
    this.cx.fill();
    this.cx.closePath();

    this.cx.beginPath();
    this.cx.arc(135, 130, 60,  (200 * Math.PI/180), (250 * Math.PI/180), false);
    this.cx.fillStyle = "#4891bb";
    this.cx.stroke();
    this.cx.closePath();

    
    this.cx.beginPath();
    this.cx.moveTo(93, 103);
    this.cx.lineTo(78.5, 110);
    this.cx.lineTo(75, 95);
    this.cx.stroke();
    this.cx.closePath();

    this.cx.save();
    this.cx.translate(15, 80);
    this.cx.rotate(-45 * Math.PI/180);
    this.cx.font = "16px sans-serif";
    this.cx.fillStyle = "black";
    this.cx.fillText("Click", 40,55);
    this.cx.restore();

    this.drawPoints();
  }  

  drawPoint(dataPoint){
    for(var i = 0; i < dataPoint.length; i++){
      this.cx.beginPath();
      this.cx.arc(dataPoint[i].x, dataPoint[i].y, 10, 0, 2 * Math.PI, false);
      this.cx.closePath();
      this.cx.fillStyle = "#333333";
      this.cx.stroke();
      this.cx.fill();
    }
  }

  drawLine(dataPoint){
    if(dataPoint.length <=  0) return;
    this.cx.beginPath();
    this.cx.moveTo(dataPoint[0].x, dataPoint[0].y);
    for(var i = 1; i < dataPoint.length; i++)
      this.cx.lineTo(dataPoint[i].x, dataPoint[i].y);
    
    this.cx.lineWidth = 5;
    this.cx.strokeStyle = '#2b4d8b';
    this.cx.closePath();
    this.cx.stroke();
  }

  getDegrees(degres: number){
    return (degres * Math.PI/180);
  }
}
