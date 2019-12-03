import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.css']
})
export class ChartDataComponent implements AfterViewInit  {

  @ViewChild('canvas', {static: false}) public canvas: ElementRef;

  cx: CanvasRenderingContext2D;
  dataPoints: any = [];
  dataColor: Array<string> = [
    "#4891bb",
    "#97991e",
    "#c4640e",
    "#b548a5",
    "#644684"
  ];
  
  @Input()
  set dataPoint(data:any){
    this.dataPoints = data;
  }

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = 500;
    canvasEl.height = 500;
    this.draw();
  }

  drawPoints(){
    this.drawLine(this.dataPoints);
    this.drawPoint(this.dataPoints);
  }

  draw(){
    this.cx.clearRect(0, 0, 500, 500);

    this.cx.translate(250, 250);
    this.cx.rotate(20 * Math.PI / 180);
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

    /*this.cx.beginPath();
    this.cx.moveTo(500/2, 500/2);
    this.cx.arc(500/2, 500/2, 250, 0, this.getDegrees(72), false);
    this.cx.closePath();
    this.cx.fillStyle = "#4891bb";
    this.cx.fill();

    this.cx.beginPath();
    this.cx.moveTo(500/2, 500/2);
    this.cx.arc(500/2, 500/2, 250,this.getDegrees(72), this.getDegrees(144), false);
    this.cx.closePath();
    this.cx.fillStyle = "#97991e";
    this.cx.fill();

    this.cx.beginPath();
    this.cx.moveTo(500/2, 500/2);
    this.cx.arc(500/2, 500/2, 250, this.getDegrees(144), this.getDegrees(216), false);
    this.cx.closePath();
    this.cx.fillStyle = "#c4640e";
    this.cx.fill();

    this.cx.beginPath();
    this.cx.moveTo(500/2, 500/2);
    this.cx.arc(500/2, 500/2, 250, this.getDegrees(216), this.getDegrees(288), false);
    this.cx.closePath();
    this.cx.fillStyle = "#b548a5";
    this.cx.fill();

    this.cx.beginPath();
    this.cx.moveTo(500/2, 500/2);
    this.cx.arc(500/2, 500/2, 250, this.getDegrees(288), this.getDegrees(360), false);
    this.cx.closePath();
    this.cx.fillStyle = "#644684";
    this.cx.fill();*/

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
    this.cx.closePath();
    this.cx.fillStyle = "#b2b2b2";
    this.cx.lineWidth = 5;
    this.cx.strokeStyle = '#717171';
    this.cx.stroke();
    this.cx.fill();

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
